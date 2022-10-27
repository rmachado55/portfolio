import DestaquesCv from './Highlights'
import Repositorio from './MyGit/index.jsx';
import Certificados from './Courses';
import Projects from './Projects';
import NavigationBar from 'components/NavigationBar';
import Contact from './Contact';
import FooterBar from 'components/FooterBar';

export default function Home () {
    

    return(<>
            <NavigationBar/>
            <DestaquesCv />
            <Projects/>
            <Repositorio />
            <Certificados />
            <Contact />
            <FooterBar />
          </>)

}