import ColorSelector from './ColorSelector';
import GridSize from './GridSize';
import Grid from './Grid';
import useBoxes from './hooks/useBoxes';
function App() {
  const { color, changeColorHandler, gridSize, gridSizeHandler } = useBoxes();
  return (
    <div className="App">
      <ColorSelector
        colorSelected={color}
        changeColorHandler={changeColorHandler}
      />
      <GridSize gridSize={gridSize} gridSizeHandler={gridSizeHandler} />
      <Grid color={color} gridSize={gridSize} />
    </div>
  );
}

export default App;
