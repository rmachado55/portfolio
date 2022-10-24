import DestaquesCv from './Highlights'
import Repositorio from './MyGit';
import Certificados from './Courses';
import Projects from './Projects';

export default function Home () {
    

    return(<>
            <DestaquesCv />
            <Projects/>
            <Repositorio />
            <Certificados />   
          </>)

}