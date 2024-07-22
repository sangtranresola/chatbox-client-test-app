import { Button, createStyles, Text, Container } from '@mantine/core';

const useStyles = createStyles(theme => ({
    customText: {
      color: 'violet',
      fontSize: '30px',
      textDecoration: 'underline',
    },
    newText: {
      marginTop: theme.spacing.md,
      padding: [theme.spacing.xs, theme.spacing.md],
    },
    newButton: {
      backgroundColor: 'red',
    }
  }));
  
const Main = () => {
    const { classes } = useStyles();
    return <Container>
        <Text className={classes.customText}>This is Mantine text</Text>           
            <Button className={classes.newButton}>Mantine button</Button>
    </Container>
}

export default Main;



/**
 * Emotion Style - Worked!
 */

// import { Container } from '@mantine/core';
// import styled from '@emotion/styled';
// const TestText = styled.div`
//   color: red;
//   font-size: 20px;
//   font-weight: bold;
// `;
  
// const Main = () => {
//     return <Container>
//         <TestText>Test Text</TestText>
//     </Container>
// }

// export default Main;


/**
 * Mantine
 */

// import { Button, Container } from '@mantine/core';
  
// const Main = () => {
//     return <Container>
//         <Button>Test Mantine Button</Button>
//     </Container>
// }

// export default Main;




