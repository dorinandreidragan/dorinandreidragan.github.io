---
date: 2025-02-21
category:
  - python
order: 1
tag:
  - vscode
  - jupyter
  - poetry
  - python
---

# 📓 How to Use Jupyter Notebooks in VSCode with Poetry Virtual Environments 🚀

If you're a developer using Jupyter Notebooks and Poetry, you might face an issue where VSCode doesn't automatically recognize the Poetry virtual environments. This guide will show you how to solve this problem by updating the VSCode user settings accordingly.

## Step 1: Create a New Project with Poetry

Navigate to your project directory and create a new project using Poetry:
```bash
mkdir my_jupyter_project
cd my_jupyter_project
poetry init
```
Follow the prompts to set up your `pyproject.toml` file.

## Step 2: Install and Activate the Virtual Environment

To create and activate the virtual environment, run:
```bash
poetry install
poetry shell
```
This will create a virtual environment and activate it, isolating your project's dependencies.

## Step 3: Open VSCode and Install the Jupyter Extension

Open your project folder in VSCode:
```bash
code .
```
Make sure to install the Jupyter extension in VSCode if you haven't already. You can find it in the Extensions view by searching for "Jupyter".

## Step 4: Configure VSCode User Settings ⚙️

Ensure that VSCode is configured to recognize Poetry virtual environments. Add the following settings to your `settings.json` file:
```json
"python.venvPath": "/home/YourUsername/.cache/pypoetry/virtualenvs",
"python.venvFolders": ["/home/YourUsername/.cache/pypoetry/virtualenvs"]
```
Replace `YourUsername` with your actual username.

## Step 5: Create and Run a Jupyter Notebook 📓

With the virtual environment set up, you can now create a Jupyter Notebook:

1. Open the Command Palette (`Ctrl+Shift+P`) and type `Jupyter: Create New Blank Notebook`.
2. Select the appropriate kernel (your Poetry virtual environment) from the kernel picker in the top-right corner of the notebook.
3. Start coding in your Jupyter Notebook and enjoy the power of Poetry and Jupyter combined! 🎉

By following these steps, you can efficiently manage your Jupyter Notebook projects using Poetry within VSCode, ensuring that your dependencies are well-organized and isolated. Happy coding! 💻✨
