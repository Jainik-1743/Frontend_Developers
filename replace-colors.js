const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./apps/portfolio/src');

const replacements = {
  'bg-[#fbf9f6]': 'bg-background',
  'bg-[#0f172a]': 'bg-background',
  'text-[#1e293b]': 'text-foreground',
  'bg-[#1e293b]': 'bg-foreground',
  'border-[#e2e8f0]': 'border-border',
  'border-[#1e293b]': 'border-foreground',
  'text-[#64748b]': 'text-muted',
  'text-[#94a3b8]': 'text-muted',
  'bg-[#ffedd5]': 'bg-accent-light',
  'bg-[#fff3ee]': 'bg-nav-active',
  'bg-[#f5f7fb]': 'bg-nav-hover',
  'text-[#ff5b00]': 'text-accent',
  'bg-[#ff6b00]': 'bg-accent',
  'text-[#f97316]': 'text-accent',
  'bg-white dark:bg-[#0b1220]': 'bg-background', // fix Topnav
  'bg-white': 'bg-background', // fix explicit white backgrounds
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  Object.keys(replacements).forEach(key => {
    // Escape brackets and hashes for Regex
    const regex = new RegExp(key.replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\#/g, '\\#'), 'g');
    content = content.replace(regex, replacements[key]);
  });

  // some other explicit replacements
  content = content.replace(/dark:bg-\[\#152d56\]/g, 'dark:bg-nav-active');
  content = content.replace(/dark:hover:bg-\[\#102447\]/g, 'dark:hover:bg-nav-hover');
  content = content.replace(/text-\[\#ff5b00\]/g, 'text-accent');
  content = content.replace(/bg-\[\#fff3ee\]/g, 'bg-nav-active');
  content = content.replace(/text-\[\#1e293b\]/g, 'text-foreground');
  content = content.replace(/hover:bg-\[\#f5f7fb\]/g, 'hover:bg-nav-hover');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
