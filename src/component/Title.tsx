import { CSSProperties, FC } from 'react'

type Props = {
  styles?: CSSProperties;
  children: string
}

const Title: FC<Props> = ({ children, styles }) => {
  return (
    <h1 className='my-5 h-1 text-center' style={styles}>{children}</h1>
  )
}
export default Title;