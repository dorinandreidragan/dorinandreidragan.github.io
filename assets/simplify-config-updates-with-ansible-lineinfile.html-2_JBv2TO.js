import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-mZpCYEBi.js";const i={},t=a(`<h1 id="simplify-config-updates-with-ansible-s-lineinfile" tabindex="-1"><a class="header-anchor" href="#simplify-config-updates-with-ansible-s-lineinfile"><span>Simplify Config Updates with Ansible&#39;s Lineinfile</span></a></h1><p>Managing configuration files across servers can be tricky. Ansible&#39;s <code>lineinfile</code> module makes it easy to automate these changes while ensuring consistency and safety.</p><h2 id="quick-steps" tabindex="-1"><a class="header-anchor" href="#quick-steps"><span><strong>Quick Steps</strong></span></a></h2><ol><li><p><strong>Define Variables</strong>: Create a dictionary with file path and configuration options:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token key atrule">app_cfg_file</span><span class="token punctuation">:</span> /etc/app/app.cfg
  <span class="token key atrule">app_cfg</span><span class="token punctuation">:</span>
    <span class="token key atrule">max_connections</span><span class="token punctuation">:</span> <span class="token number">200</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> <span class="token string">&quot;INFO&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Update Configurations</strong>: Use <code>lineinfile</code> to modify the file:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update config options
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ app_cfg_file }}&quot;</span>
    <span class="token key atrule">regexp</span><span class="token punctuation">:</span> <span class="token string">&quot;^{{ item.key }}=&quot;</span>
    <span class="token key atrule">line</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ item.key }}={{ item.value }}&quot;</span>
    <span class="token key atrule">backup</span><span class="token punctuation">:</span> yes
    <span class="token key atrule">insertbefore</span><span class="token punctuation">:</span> BOF
  <span class="token key atrule">loop</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ app_cfg | dict2items }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="why-use-it" tabindex="-1"><a class="header-anchor" href="#why-use-it"><span><strong>Why Use It?</strong></span></a></h2><ul><li><strong>Idempotent</strong>: Only changes what&#39;s necessary.</li><li><strong>Safe</strong>: Backups are timestamped for easy recovery.</li><li><strong>Efficient</strong>: Automates tedious manual edits.</li></ul><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span><strong>Conclusion</strong></span></a></h2><p>With <code>lineinfile</code>, automating consistent updates across servers becomes a breeze. Give it a try!</p>`,8),l=[t];function o(c,p){return s(),e("div",null,l)}const d=n(i,[["render",o],["__file","simplify-config-updates-with-ansible-lineinfile.html.vue"]]),m=JSON.parse(`{"path":"/articles/simplify-config-updates-with-ansible-lineinfile.html","title":"Simplify Config Updates with Ansible's Lineinfile","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Quick Steps","slug":"quick-steps","link":"#quick-steps","children":[]},{"level":2,"title":"Why Use It?","slug":"why-use-it","link":"#why-use-it","children":[]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"git":{"createdTime":1743057589000,"updatedTime":1743057589000,"contributors":[{"name":"dorinandreidragan","email":"dorinandreidragan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"articles/simplify-config-updates-with-ansible-lineinfile.md","localizedDate":"March 27, 2025"}`);export{d as comp,m as data};
