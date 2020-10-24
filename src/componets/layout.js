import React,{useEffect,useRef} from 'react'
import '../styles/layout.css';

function Layout() {

    let cbody

    const foot = useRef()
    const body = useRef()
    function displayChange(){
        if(body.current.clientHeight > window.innerHeight){
            foot.current.className = "footer"
        }else{
            foot.current.className = "footer fix_bottom"
        }
    }

  useEffect(() => {
    window.addEventListener('resize',displayChange)
    return () => {
       window.removeEventListener('resize',displayChange)
    };

  });

    return (
        <div ref={body}>
            <div className="header">header</div>
            <div className="contentbody">
                <div className="left">left</div>
                <div className="content">content</div>
                <div className="right">right</div>
            </div>
            <div className="footer fix_bottom" ref={foot}>footer</div>
        </div>
    )
}
export default Layout



