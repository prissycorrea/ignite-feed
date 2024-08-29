import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { //extends ImgHTMLAttributes<HTMLImageElement> - passando todas as propriedades de uma tag img para a interface, para que possamos utilizar todas as propriedades de uma tag img. Foi importado de 'react' no início do arquivo.
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar( { hasBorder = true, ...props }: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
    );
}