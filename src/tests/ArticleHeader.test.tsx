import { render, screen } from '@testing-library/react';
import ArticleHeader from '@/components/Article/ArticleHeader/ArticleHeader';

describe('ArticleHeader', () => {
    it('renders title, author, category, and date correctly', () => {
        render(
            <ArticleHeader
                title="Testing Title"
                author="Arya Abadi"
                category="IT"
                date="2025-05-06"
            />
        );

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Testing Title');
        expect(screen.getByText(/Arya Abadi · IT/)).toBeInTheDocument();
        expect(screen.getByText(/2025-05-06/)).toBeInTheDocument();
    });
});
