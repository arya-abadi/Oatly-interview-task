import { render, screen } from '@testing-library/react';
import Article from '@/components/Article/Article';
import articleData from '@/data/data.json';

jest.mock('@/hooks/useBreakpoint', () => ({
    useBreakpoint: () => ({ isDesktop: true }),
}));

describe('Article Integration Test', () => {
    it('renders header, prelude, image, and all paragraphs', () => {
        render(<Article articleData={articleData} />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(articleData.title);
        expect(screen.getByText(articleData.prelude)).toBeInTheDocument();
        articleData.paragraphs.forEach(paragraph =>
            expect(screen.getByText(paragraph)).toBeInTheDocument()
        );
    });
});
