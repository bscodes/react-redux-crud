import './App.scss';
import SplitPane, { Pane } from 'react-split-pane';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import RecordList from './components/RecordList/RecordList';
import { useState } from 'react';
import Box from './components/SettingsBox/SettingsBox';
import * as Utils from './helpers/Utils';
import StaticTable from './components/StaticTable/StaticTable';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [verticalSize, setVerticalSize] = useState(null);
  const [horizontalSize, setHorizontalSize] = useState(null);

  const windowSize = Utils.useWindowSize();


  return (
    <>
      <SplitPane 
        split="vertical" 
        defaultSize={900}
        minSize={350}
        onChange={
          (size) => localStorage.setItem('splitPos', size)
        }
        onDragFinished={
          (size) => setVerticalSize(size)
        } 
      >
        <SplitPane 
          split="horizontal" 
          defaultSize={500}
          minSize={200}
          onChange={
            (size) => localStorage.setItem('splitPos', size)
          }
          onDragFinished={
            (size) => setHorizontalSize(size)
          }
        >
          <Pane initialSize="100%" minSize="40%" maxSize="300px" className="pane">
            <StaticTable/>
          </Pane>
          
          <Pane initialSize="100%" minSize="40%" maxSize="300px" className="pane">
            <RecordList/>
            <div className="button-wrapper">
              {isVisible && <Input/>}
              <Button
                title={!isVisible ? "Yeni Ekle" : "Kapat"}
                onClick={() => setIsVisible(!isVisible)}
              />
            </div>
          </Pane>
        </SplitPane>
        <SplitPane 
          split="horizontal" 
          defaultSize={500}
          minSize={200}
          onChange={
            (size) => localStorage.setItem('splitPos', size)
          }
          onDragFinished={
            (size) => setHorizontalSize(size)
          }
        >
          <Pane initialSize="100%" minSize="50%" maxSize="300px" className="pane">
            <Box
              horizontal={
                horizontalSize !== null 
                ? '%' + Utils.getPercentage(windowSize.height, horizontalSize)
                : "" 
              }

              horizontalOutoff={
                horizontalSize !== null 
                ? '%' + (100 - Utils.getPercentage(windowSize.height, horizontalSize))
                : "" 
              }
              verticalTop={
                verticalSize !== null 
                ? '%' + Utils.getPercentage(windowSize.width, verticalSize)
                : ""
              }
              verticalBottom={
                verticalSize !== null 
                ? '%' + Utils.getPercentage(windowSize.width, verticalSize) 
                : ""
              }
              verticalBottomOutoff={
                verticalSize !== null 
                ?  "%" + (100 - Utils.getPercentage(windowSize.width, verticalSize))
                : ""
              }
            />
          </Pane>
          
          <Pane initialSize="100%" minSize="40%" maxSize="300px" className="pane">
            "Lorem Ipsum"
          </Pane>
        </SplitPane>
      </SplitPane>
    </>
  );
}

export default App;
