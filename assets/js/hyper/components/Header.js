import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
    <div className="container">
        <div className="logo">
          Logo
        </div>
        <nav>
            <a href="#">Our Story</a>
            <a href="#">Special Menu</a>
            <a href="#">Reviews</a>
            <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
