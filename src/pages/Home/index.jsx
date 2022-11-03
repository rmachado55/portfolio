import { Highlights } from './Highlights'
import { MyGit } from './MyGit'
import { Courses } from './Courses';
import Projects from './Projects';
import NavigationBar from 'components/NavigationBar';
import Contact from './Contact';
import FooterBar from 'components/FooterBar';

export const Home = () => {

    return(<>
            <NavigationBar/>
            <Highlights />
            <Projects/>            
            <MyGit/>
            <Courses />
            {/* <Contact /> */}
            <FooterBar />
          </>)

}