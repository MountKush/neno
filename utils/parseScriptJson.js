const parseScriptJson = ({ data, scriptName }) => {
  const parser = new DOMParser()
  const parsedHtml = parser.parseFromString(data, 'text/html')
  const scripts = parsedHtml.querySelectorAll(scriptName)
  const json = []
  scripts.forEach(script => json.push(JSON.parse(script.textContent)))
  return json
}

export { parseScriptJson }
