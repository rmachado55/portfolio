import styled from 'styled-components';
import {DarkColor, SecondaryColor, PrimaryColor, Vertical, Horizontal, ThickFont, NarrowFont, ContrastColor} from 'style/_variables.js';

export const Container = ({children, dark, id, bottom, top}) => {
    
    const Theme = dark

    const Container = styled.section`
        position: ${Theme ? 'none' : 'absolute'};        
        background-color: ${Theme ? DarkColor : SecondaryColor};
        color: ${Theme ? ContrastColor : DarkColor};
        font-family: ${Theme ? NarrowFont : ThickFont};
        z-index: ${Theme ? '-1' : '1' };
        `

    const Content = styled.div`
        padding:  ${Vertical} ${Horizontal};
        width: ${Theme ? 'none' : '100%'};
        height: ${Theme ? 'none' : '90vh'};

        h1 {
            color: ${PrimaryColor};
            font-family: ${Theme ? ThickFont : NarrowFont};
            text-shadow: ${Theme ? '1px 0 2px rgba(255, 255, 255, 0.3)': 'none'};
        }
        h2 {
            color: ${Theme ? SecondaryColor : DarkColor };
            font-family: ${Theme ? ThickFont : NarrowFont};
            text-shadow: ${Theme ? '1px 0 2px rgba(255, 255, 255, 0.3)': 'none'};
        }
    `
    const TransitionTop = styled.div`    
    height: 2vh;
    width:100%;    
    background-image: ${top ? `linear-gradient(rgba(20,20,20,0.9), ${SecondaryColor})` : 'none'};
    `

    const TransitionBottom = styled.div`    
    height: 2vh;
    width:100%;    
    background-image: ${bottom ? `linear-gradient(${SecondaryColor}, rgba(20,20,20,0.9))` : 'none'};
    `

    return(<>
        <Container id={id}>
            <TransitionTop id={`TopOf${id}`}/>
            <Content >
                {children}
            </Content>
            <TransitionBottom id={`BottomOf${id}`}/>
        </Container>
        
        </>
    )
}