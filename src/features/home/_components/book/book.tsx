import * as stylex from '@stylexjs/stylex';

interface BookProps {
  title: string;
  thumbnail: string | undefined;
}

export default function Book({ title, thumbnail }: BookProps) {
  return (
    <div {...stylex.props(styles.card)}>
      <img {...stylex.props(styles.image)} src={thumbnail} alt={title} loading='lazy' />
      <span {...stylex.props(styles.title)}>{title}</span>
    </div>
  );
}

const styles = stylex.create({
  card: {
    maxWidth: '101px',
  },
  image: {
    width: '101px',
    height: '101px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
