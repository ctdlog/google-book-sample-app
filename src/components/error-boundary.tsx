import { Component, ComponentType, createElement, ReactNode, ErrorInfo } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type FallbackProps = {
  error: Error | null;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
  fallbackRender: ComponentType<FallbackProps>;
  onReset: () => void;
  children: ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  resetErrorBoundary(): void {
    this.props.onReset();

    this.setState({
      hasError: false,
      error: null,
    });
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    const { state, props, resetErrorBoundary } = this;

    const { hasError, error } = state;

    const { fallbackRender, children } = props;

    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary,
    };

    const fallbackComponent = createElement(fallbackRender, fallbackProps);

    return hasError ? fallbackComponent : children;
  }
}
