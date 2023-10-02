const AppWrapper = (OriginalComponent, componentName) => {
  function NewComponent(props) {
    return (
      <>
        <h1>This is the {componentName}</h1>
        <OriginalComponent {...props} />
      </>
    );
  }
  return NewComponent;
};

export default AppWrapper;
