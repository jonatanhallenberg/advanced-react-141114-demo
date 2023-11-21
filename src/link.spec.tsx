import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import '@testing-library/jest-dom';

test('should render link text', () => {
    render(<Link url="http://www.google.se">click here123</Link>)
    const linkElement = screen.getByText('click here');
    expect(linkElement).toBeInTheDocument();
})

test('should render according to snapshot', () => {
    const { asFragment } = render(<Link url="http://www.google.se">click here</Link>);
    expect(asFragment()).toMatchSnapshot();
})