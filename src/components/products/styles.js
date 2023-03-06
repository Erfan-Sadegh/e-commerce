import styled from '@emotion/styled';

const useStyles = styled((theme) => ({
  toolBar: theme.mixins.toolBar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default useStyles;
