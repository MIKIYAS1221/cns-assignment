import { loadPyodide as _loadPyodide } from 'pyodide';

const loadPyodide = async () => {
  const pyodide = await _loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.18.0/full/' });
  return pyodide;
};

export default loadPyodide;
