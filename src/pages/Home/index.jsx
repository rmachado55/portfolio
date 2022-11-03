import { Start } from './Start'
import { MyGit } from './MyGit'
import { Courses } from './Courses';
import Projects from './Projects';
import NavigationBar from 'components/NavigationBar';
import Contact from './Contact';
import FooterBar from 'components/FooterBar';
import {Animations} from 'style/Animations/Home'

export const Home = () => {

  Animations()
    return(<>
            <NavigationBar/>
            <Start />
            <Projects/>            
            <MyGit/>
            <Courses />
            {/* <Contact /> */}
            <FooterBar />
          </>)

}