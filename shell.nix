with import <nixpkgs> { };
(python3.withPackages (ps:
  with ps; [
    geckodriver
    Mako
    PyGithub
    # PyHamcrest
    addict
    beautifulsoup4
    behave
    boto3
    diff-match-patch
    # gherkin-official
    github3_py
    inflect
    jsonpatch
    jsonpath-ng
    jsonschema
    lxml
    markdown
    markdownify
    munch
    networkx
    ortools
    pathvalidate
    psutil
    pushbullet-py
    pygit2
    pygtrie
    pylint
    pytablewriter
    python-dotenv
    python-frontmatter
    python-slugify
    # readmd
    redo
    # reformat_gherkin
    requests
    ruamel_yaml
    selenium
    snakemake
    toml
    pyautogui
    pyelftools
    (toPythonModule bcc)
  ])).env
