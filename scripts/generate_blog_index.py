import os
import glob
import yaml
import json
from pathlib import Path

ARTICLES_DIR = Path(__file__).parent.parent / 'docs' / 'articles'
OUTPUT_FILE = Path(__file__).parent.parent / 'docs' / 'public' / 'blog-index.json'


def extract_frontmatter(md_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    if lines[0].strip() == '---':
        fm_lines = []
        for line in lines[1:]:
            if line.strip() == '---':
                break
            fm_lines.append(line)
        frontmatter = yaml.safe_load(''.join(fm_lines))
        return frontmatter
    return {}


def main():
    articles = []
    for md_path in glob.glob(str(ARTICLES_DIR / '**' / '*.md'), recursive=True):
        rel_path = os.path.relpath(md_path, ARTICLES_DIR.parent)
        fm = extract_frontmatter(md_path)
        if fm:
            date_val = fm.get('date')
            if hasattr(date_val, 'isoformat'):
                date_val = date_val.isoformat()
            # Handle series as dict with name and episode, or None
            series_val = fm.get('series')
            if isinstance(series_val, dict):
                series = {
                    'name': series_val.get('name'),
                    'episode': series_val.get('episode')
                }
            else:
                series = None
            articles.append({
                'title': fm.get('title') or Path(md_path).stem,
                'date': date_val,
                'category': fm.get('category'),
                'tag': fm.get('tag'),
                'series': series,
                'order': fm.get('order'),
                'summary': fm.get('summary'),
                'path': '/' + rel_path.replace(os.sep, '/').replace('.md', '')
            })
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        json.dump(articles, out, indent=2, ensure_ascii=False)

if __name__ == '__main__':
    main()
