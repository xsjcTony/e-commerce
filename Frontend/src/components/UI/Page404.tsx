import { Button, createErrorBlock } from 'antd-mobile'
import { CloseCircleFill } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


/**
 * Types
 */
interface Page404Props {
  homePath?: string
}


/**
 * Style
 */
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .icon {
        font-size: 80px;
        color: var(--adm-color-danger);
    }
`


const ErrorBlock = createErrorBlock({
  'default': <CloseCircleFill className="icon" />
})


/**
 * Component
 */
const Page404 = ({ homePath = '/' }: Page404Props): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Container>
      <ErrorBlock
        description={null}
        status="default"
        title="404 Not Found"
      >
        <Button
          color="primary"
          onClick={() => void navigate('/', { replace: true })}
        >
          Back to Home
        </Button>
      </ErrorBlock>
    </Container>
  )
}

export default Page404
