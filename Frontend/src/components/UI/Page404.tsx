import { Button, createErrorBlock } from 'antd-mobile'
import { CloseCircleFill } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import styles from './Page404.module.scss'


/**
 * Types
 */
interface Page404Props {
  homePath?: string
}


const ErrorBlock = createErrorBlock({
  'default': <CloseCircleFill className="icon" />
})


/**
 * Component
 */
const Page404 = ({ homePath = '/' }: Page404Props): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <ErrorBlock
        description={null}
        status="default"
        title="404 Not Found"
      >
        <Button
          color="primary"
          onClick={() => void navigate(homePath, { replace: true })}
        >
          Back to Home
        </Button>
      </ErrorBlock>
    </div>
  )
}

export default Page404
