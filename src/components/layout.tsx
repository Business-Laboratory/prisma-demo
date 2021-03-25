import 'twin.macro'
import Header from '@/components/header'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div tw="px-8" className="layout">
      {props.children}
    </div>
    <style jsx global>{`
      body {
      }
    `}</style>
  </div>
)

export default Layout
