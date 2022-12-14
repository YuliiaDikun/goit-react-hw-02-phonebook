import { ThemeProvider } from 'styled-components'
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import {theme} from 'styles/theme'
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      >
        Homework
      </div>
    </ThemeProvider>
  );
};
