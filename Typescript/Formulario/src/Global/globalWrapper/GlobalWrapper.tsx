import * as Styled from './GlobalWrapper.styles'

function GlobalWrapper({children}: {children: React.ReactNode}) {
    return (
        <Styled.ExternalWrapper>
            <Styled.InternalWrapper>
                {children}
            </Styled.InternalWrapper>
        </Styled.ExternalWrapper>
    );
}

export default GlobalWrapper;