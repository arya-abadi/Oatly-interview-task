import { render, screen } from '@testing-library/react';
import Article from '@/components/Article/Article';
import articleData from '@/data/data.json';

jest.mock('@/hooks/useBreakpoint', () => ({
    useBreakpoint: () => ({ isDesktop: false }),
}));

describe('Article (Mobile View)', () => {
    it('renders all paragraphs', () => {
        render(<Article articleData={articleData} />);

        articleData.paragraphs.forEach(paragraph =>
            expect(screen.getByText(paragraph)).toBeInTheDocument()
        );
    });
});
