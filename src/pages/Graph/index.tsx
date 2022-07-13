import React from 'react';
import Graphin, { Behaviors, Components, Utils } from '@antv/graphin';
import { useResizeDetector } from 'react-resize-detector';

import './index.less';

const { ZoomCanvas } = Behaviors;
const { ContextMenu, Tooltip } = Components;

const data = Utils.mock(8).circle().graphin();

export default () => {
  const { width, height, ref } = useResizeDetector();

  const graphinRef = React.createRef<Graphin>();

  React.useEffect(() => {
    if (!graphinRef || !graphinRef.current) {
      return;
    }

    const { graph, apis } = graphinRef.current;
    console.log('ref', graphinRef, graph, apis);
  }, [width, height]);

  console.log(width, height);
  return (
    <div
      className="g6-graph"
      // style={{ height: '80vh', width: '80vw' }}
      ref={ref}
    >
      <Graphin
        ref={graphinRef}
        fitCenter
        data={data}
        style={{ background: '' }}
        layout={{ type: 'concentric' }}
      >
        <ZoomCanvas disabled />
        <Tooltip
          bindType="node"
          placement="bottom"
          hasArrow
          style={{
            background: '#fff',
            width: '200px',
          }}
        >
          {() => <div>1234</div>}
        </Tooltip>
        <ContextMenu style={{ background: '#fff' }} bindType="node">
          {() => <div>1234</div>}
        </ContextMenu>
      </Graphin>
    </div>
  );
};
