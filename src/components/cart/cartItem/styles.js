import styled from '@emotion/styled'

const useStyles = styled(theme => ({
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      cartActions: {
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        alignItems: 'center',
      }
}))

export default useStyles;