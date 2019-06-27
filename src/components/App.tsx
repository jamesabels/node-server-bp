import * as React from 'react';
import hello from '../modules/hello/hello';

interface PropsType {
    name: string;
};

class App extends React.Component<PropsType, {}> { 
    public componentDidMount (): void {
        console.log(hello('Typescript'));
    }

    public render (): JSX.Element {
        return <h1>Hello, {this.props.name}!</h1>
    }
}

export default App;