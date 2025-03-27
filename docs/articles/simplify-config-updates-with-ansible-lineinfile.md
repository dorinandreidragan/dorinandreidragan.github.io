# Simplify Config Updates with Ansible's Lineinfile

Managing configuration files across servers can be tricky. Ansible's `lineinfile` module makes it easy to automate these changes while ensuring consistency and safety.

## **Quick Steps**

1. **Define Variables**: Create a dictionary with file path and configuration options:

   ```yaml
   vars:
     app_cfg_file: /etc/app/app.cfg
     app_cfg:
       max_connections: 200
       timeout: 30
       log_level: "INFO"
   ```

3. **Update Configurations**: Use `lineinfile` to modify the file:

   ```yaml
   - name: Update config options
     lineinfile:
       path: "{{ app_cfg_file }}"
       regexp: "^{{ item.key }}="
       line: "{{ item.key }}={{ item.value }}"
       backup: yes
       insertbefore: BOF
     loop: "{{ app_cfg | dict2items }}"
   ```

## **Why Use It?**

- **Idempotent**: Only changes what's necessary.
- **Safe**: Backups are timestamped for easy recovery.
- **Efficient**: Automates tedious manual edits.

## **Conclusion**

With `lineinfile`, automating consistent updates across servers becomes a breeze. Give it a try!
