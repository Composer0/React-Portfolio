import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src='https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg' alt=''></img>
    </div>
  )
}
