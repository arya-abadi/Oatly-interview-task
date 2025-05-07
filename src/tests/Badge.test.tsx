import { render, screen } from '@testing-library/react';
import Badge from '@/components/Badge/Badge';

describe('Badge', () => {
    it('renders children inside badge', () => {
        render(<Badge><p>By Arya</p></Badge>);
        expect(screen.getByText(/By Arya/)).toBeInTheDocument();
    });
});
