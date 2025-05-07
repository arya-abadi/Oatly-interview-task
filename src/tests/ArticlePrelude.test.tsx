import { render, screen } from '@testing-library/react';
import ArticlePrelude from '@/components/Article/ArticlePrelude/ArticlePrelude';

describe('ArticlePrelude', () => {
    it('renders the prelude text', () => {
        render(<ArticlePrelude text="This is a testing prelude." />);
        expect(screen.getByText(/testing prelude/)).toBeInTheDocument();
    });
});
