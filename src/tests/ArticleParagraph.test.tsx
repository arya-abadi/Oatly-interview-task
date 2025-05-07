import { render, screen } from '@testing-library/react';
import ArticleParagraph from '@/components/Article/ArticleParagraph/ArticleParagraph';

describe('ArticleParagraph', () => {
    it('renders paragraph text', () => {
        render(<ArticleParagraph text="This is a testing paragraph." />);
        expect(screen.getByText(/This is a testing paragraph/)).toBeInTheDocument();
    });
});
