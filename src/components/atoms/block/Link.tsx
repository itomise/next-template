import NextLink from 'next/link'
import { ParsedUrlQueryInput } from 'querystring'
import cn from 'classnames'
import style from '~/styles/components/block/Link.module.scss'

type Props = {
  id?: string
  pathname: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  query?: string | ParsedUrlQueryInput
}

const Link: React.FC<Props> = ({
  id,
  pathname,
  children,
  className,
  onClick,
  query,
}) => {
  return (
    <NextLink href={{ pathname, query }}>
      <a
        className={cn(style.anchor, className)}
        id={id ?? ''}
        onClick={onClick}
      >
        {children}
      </a>
    </NextLink>
  )
}

export { Link }
