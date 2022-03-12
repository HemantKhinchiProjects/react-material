import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="MuiBox-root css-9jay18">
      <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded css-ico5vo">
        <div>
          <span className="MuiBadge-root css-1rzb3uu">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShoppingCartRoundedIcon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
            <span className="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-13hv9on">
              1
            </span>
          </span>
        </div>
      </div>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
