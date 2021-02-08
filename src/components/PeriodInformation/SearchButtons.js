import React, {useMemo} from 'react';

export default function SearchButtons({buttons, handler}) {
  return (
    <div id="search">
      {buttons.map(btn => <input key={btn.value}
                                 type="radio"
                                 onChange={handler}
                                 name="1"
                                 value={btn.value}
                                 checked={btn.isChecked}/>)}
    </div>
  );
}