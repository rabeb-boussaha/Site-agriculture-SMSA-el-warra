import React from "react";
import Image from "next/image";
import blée from "../../public/images/Home/blée.png";

function Modern() {
  return (
    <div className="w100 Moderncontainer">
      <div className="bg-light d-flex justify-content-center alignC p-4">
        <div className="w34 features-item d-flex mb-30">
          <div className="Icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              height="1em"
              width="1em"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none">
                <path d="M415 4541 c-129 -32 -208 -163 -171 -284 31 -103 119 -167 228 -167 l58 0 0 -662 0 -663 -85 -39 c-159 -73 -360 -224 -410 -310 -69 -119 -28 -270 92 -338 l53 -30 -24 -41 c-134 -228 -156 -557 -55 -817 87 -227 280 -429 507 -532 225 -102 506 -108 742 -17 163 62 315 180 426 329 l67 90 463 0 c434 0 463 1 485 18 33 27 30 78 -5 109 -27 23 -30 23 -273 23 l-245 0 6 23 c3 12 12 55 18 95 l12 72 640 0 641 0 2 -95 3 -95 -271 0 -271 0 -30 -30 c-24 -25 -29 -36 -23 -58 16 -63 8 -62 339 -62 l301 0 37 -73 c75 -145 193 -259 343 -332 124 -60 205 -78 340 -77 133 0 228 23 341 81 152 77 270 195 343 345 59 120 75 190 75 336 1 143 -19 231 -79 350 l-35 70 0 319 c0 338 -7 409 -49 522 -44 118 -146 246 -256 324 -138 98 -261 138 -495 163 l-165 17 -5 325 c-6 368 -4 361 -86 401 l-45 21 3 127 3 126 92 30 c51 17 100 38 109 47 41 41 5 121 -53 121 -48 0 -200 -52 -233 -79 -55 -47 -64 -75 -68 -230 l-4 -142 -45 -6 c-58 -8 -99 -32 -126 -76 -21 -34 -22 -47 -25 -327 -2 -185 -7 -293 -13 -293 -16 0 -344 32 -346 34 -4 3 -283 887 -283 896 0 6 14 10 31 10 130 0 239 119 226 248 -10 100 -80 179 -177 201 -28 7 -269 11 -638 11 -501 0 -597 -2 -621 -15 -43 -22 -55 -71 -25 -110 14 -20 30 -20 640 -25 l626 -5 24 -28 c31 -36 31 -71 -1 -102 l-24 -25 -1269 0 c-1247 0 -1269 0 -1289 20 -30 27 -36 55 -21 87 25 53 25 53 555 53 l492 0 21 22 c34 37 25 90 -21 113 -23 13 -105 15 -511 14 -266 -1 -496 -4 -513 -8z m965 -1097 l0 -646 -27 5 c-16 4 -59 13 -98 22 -108 24 -321 30 -440 12 -55 -9 -108 -19 -118 -22 -16 -7 -17 28 -17 634 l0 641 350 0 350 0 0 -646z m1505 209 c76 -241 140 -443 142 -449 3 -8 -30 -13 -104 -16 -95 -4 -115 -8 -159 -32 l-51 -28 -100 63 -100 62 33 56 c39 64 43 102 14 131 -25 25 -81 27 -102 3 -9 -10 -61 -91 -117 -181 -106 -172 -120 -212 -83 -244 48 -42 89 -28 137 47 20 30 38 55 42 55 3 0 48 -26 99 -57 l94 -58 0 -257 0 -258 -340 0 -339 0 -3 543 c-3 608 0 576 -79 662 -80 87 -206 114 -322 70 -16 -7 -17 5 -17 159 l0 166 608 0 609 0 138 -437z m995 -244 l0 -291 -82 7 c-46 4 -86 9 -90 12 -10 5 -11 547 -1 556 3 4 44 7 90 7 l83 0 0 -291z m-2140 203 c14 -10 33 -34 42 -53 16 -31 18 -76 18 -506 l0 -473 -72 49 c-40 27 -101 63 -135 80 l-63 31 0 401 c0 451 -2 441 75 480 46 23 95 20 135 -9z m1320 -802 c0 -187 -3 -237 -15 -260 -24 -47 -61 -60 -170 -60 l-95 0 0 239 c0 228 1 239 21 265 31 39 51 45 162 45 l97 1 0 -230z m586 179 l352 -33 4 -180 c4 -156 8 -189 26 -236 45 -112 130 -197 242 -242 51 -20 75 -22 318 -26 l262 -4 0 -170 0 -170 -47 35 c-248 180 -585 195 -849 36 -133 -80 -259 -229 -315 -373 l-28 -71 -650 -3 -651 -2 0 42 c0 68 -27 226 -54 320 -33 113 -91 237 -160 343 l-55 84 492 3 492 3 47 27 c25 16 60 45 77 65 55 67 61 102 61 361 l0 234 43 -5 c23 -4 200 -21 393 -38z m731 -80 c137 -34 268 -115 345 -212 50 -63 105 -176 114 -235 l7 -44 -249 4 -249 3 -54 30 c-54 30 -84 61 -117 125 -15 29 -19 64 -22 199 l-4 164 78 -8 c44 -4 111 -15 151 -26z m-3222 -219 c473 -68 852 -407 972 -868 34 -135 42 -321 18 -462 -26 -161 -17 -150 -135 -150 -55 0 -100 1 -100 3 0 1 9 34 21 72 27 91 37 316 19 419 -66 374 -340 668 -716 772 -81 22 -295 30 -392 14 -165 -26 -334 -105 -468 -218 -39 -33 -81 -65 -93 -72 -32 -16 -76 -3 -106 32 -51 60 -28 112 92 206 174 137 330 208 539 246 94 17 252 19 349 6z m-233 -422 c4 -69 8 -84 28 -100 29 -24 75 -23 100 2 17 17 20 33 20 100 0 93 -7 90 117 60 99 -24 189 -63 273 -120 l61 -42 -55 -58 c-62 -65 -72 -104 -36 -140 37 -37 78 -27 141 36 l58 57 50 -77 c56 -86 104 -201 120 -290 17 -91 21 -86 -69 -86 -67 0 -83 -3 -100 -20 -25 -25 -26 -71 -2 -100 16 -20 31 -24 101 -28 l82 -5 -7 -46 c-16 -111 -73 -251 -141 -344 l-35 -48 -58 56 c-65 62 -98 70 -137 33 -40 -37 -31 -74 33 -139 l56 -56 -50 -36 c-69 -51 -182 -103 -276 -127 -129 -33 -126 -34 -126 60 0 89 -17 120 -66 120 -60 0 -84 -41 -84 -143 l0 -59 -47 7 c-111 16 -260 78 -351 145 l-44 31 56 59 c63 65 71 98 34 137 -36 39 -71 31 -138 -33 l-59 -56 -31 44 c-67 91 -129 240 -145 351 l-7 47 59 0 c102 0 143 24 143 84 0 49 -31 66 -120 66 -94 0 -93 -3 -60 126 24 94 76 207 127 276 l36 50 56 -56 c63 -63 104 -73 141 -36 36 36 26 75 -36 140 l-56 59 75 49 c85 55 181 97 271 117 99 21 93 26 98 -67z m3358 -370 c0 -61 27 -98 71 -98 47 0 71 30 77 95 l5 57 42 -6 c58 -7 166 -51 216 -88 l40 -29 -40 -44 c-49 -53 -51 -77 -11 -117 38 -37 68 -33 121 18 33 33 36 34 51 17 44 -51 108 -204 108 -258 0 -20 -6 -23 -57 -27 -43 -4 -61 -10 -75 -28 -24 -30 -23 -69 4 -97 17 -18 32 -23 75 -23 49 0 53 -2 53 -23 0 -53 -59 -203 -103 -261 -14 -19 -16 -19 -58 17 -51 44 -89 48 -124 12 -38 -37 -31 -70 27 -131 l30 -32 -59 -36 c-52 -33 -193 -86 -227 -86 -9 0 -15 18 -18 56 -6 67 -31 98 -80 96 -47 -1 -68 -31 -68 -98 0 -61 1 -61 -85 -39 -61 16 -138 51 -192 88 l-32 21 40 43 c44 48 49 78 18 117 -31 39 -70 35 -123 -14 l-44 -41 -35 58 c-36 60 -87 195 -87 232 0 19 6 21 55 21 67 0 95 22 95 74 0 48 -37 76 -101 76 -56 0 -56 0 -34 83 15 60 53 142 88 190 l19 29 32 -30 c49 -47 73 -56 107 -41 60 24 65 77 12 138 l-37 43 25 19 c59 44 191 97 247 98 l32 1 0 -52z" />
                <path d="M2576 2147 c-26 -26 -26 -26 -26 -202 0 -173 0 -176 25 -200 28 -29 45 -31 85 -10 38 20 42 45 38 238 -3 172 -7 181 -65 193 -26 5 -37 1 -57 -19z" />
                <path d="M2976 2147 c-26 -26 -26 -26 -26 -202 0 -176 0 -176 26 -202 20 -20 31 -24 57 -19 60 12 62 18 62 221 0 203 -2 209 -62 221 -26 5 -37 1 -57 -19z" />
                <path d="M3376 2147 c-26 -26 -26 -26 -26 -202 0 -176 0 -176 26 -202 20 -20 31 -24 57 -19 60 12 62 18 62 221 0 203 -2 209 -62 221 -26 5 -37 1 -57 -19z" />
                <path d="M896 1964 c-80 -19 -152 -63 -215 -129 -239 -252 -95 -668 253 -728 130 -22 264 21 366 119 71 68 113 146 131 244 40 226 -117 451 -349 499 -68 14 -112 13 -186 -5z m221 -164 c106 -47 168 -144 167 -265 0 -86 -31 -153 -98 -212 -109 -96 -265 -96 -374 2 -70 63 -96 121 -96 215 0 59 5 85 23 120 75 146 232 205 378 140z" />
                <path d="M4263 1612 c-126 -45 -193 -141 -193 -276 0 -111 76 -220 183 -261 58 -22 165 -17 222 10 171 83 213 316 82 453 -74 78 -197 109 -294 74z m141 -146 c72 -30 101 -108 67 -179 -24 -50 -65 -77 -116 -77 -78 0 -135 55 -135 129 0 57 26 102 71 124 42 20 70 21 113 3z" />
              </g>
            </svg>
          </div>
          <div className="text">
            <h5>Modern Agriculture Equipement</h5>
            <span className="sous-text lh-lg w70">
              Sit amet consectetur adipiscing elit sed eiusmod tempor
            </span>
          </div>
        </div>
        <div className="w34 features-item d-flex mb-30">
          <div className="Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 512.000000 512.000000"
              height="1em"
              width="1em"
              preserveAspectRatio="xMidYMid meet">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none">
                <path d="M1239 4904 c-64 -19 -141 -90 -169 -155 -16 -39 -23 -79 -27 -165 l-6 -114 -79 0 c-75 0 -81 -2 -109 -29 -40 -40 -40 -89 0 -133 28 -32 30 -32 134 -36 l104 -4 6 -157 c8 -218 36 -300 138 -406 l49 -50 -73 -35 c-90 -42 -208 -156 -254 -245 -63 -121 -63 -119 -63 -811 0 -691 1 -697 61 -820 42 -85 113 -170 186 -224 l62 -45 0 -322 1 -322 -487 -3 c-474 -3 -489 -4 -534 -24 -65 -30 -123 -86 -153 -147 -22 -43 -26 -64 -26 -142 0 -78 4 -99 26 -142 30 -61 88 -117 153 -147 39 -18 64 -21 174 -21 129 0 129 0 153 28 33 38 33 96 0 134 -23 26 -29 28 -133 33 -118 6 -145 15 -168 60 -28 54 -10 125 38 152 17 10 150 14 565 18 l544 5 24 28 24 28 0 356 0 355 23 -6 c12 -3 84 -6 160 -6 l138 0 -3 -362 -3 -363 -26 -56 c-37 -79 -90 -133 -167 -171 -62 -31 -74 -33 -199 -38 -127 -5 -134 -6 -159 -32 -40 -39 -38 -102 5 -140 30 -27 34 -28 144 -28 61 0 142 7 178 14 181 39 341 185 401 365 20 62 22 89 26 438 l4 373 178 0 179 0 3 -474 3 -473 35 -69 c117 -230 437 -230 558 0 l27 51 3 622 c3 689 3 685 -61 808 -47 89 -146 184 -237 227 -110 53 -151 58 -450 58 l-270 0 0 128 0 127 492 -3 c320 -1 511 1 544 8 28 6 72 24 97 40 l46 29 6 -47 c26 -209 112 -382 263 -524 144 -136 314 -207 515 -216 l117 -5 0 -261 0 -261 -59 -18 c-32 -10 -85 -36 -117 -57 -34 -23 -205 -185 -406 -387 -332 -332 -348 -350 -348 -386 0 -55 45 -102 99 -102 40 0 45 5 398 356 331 330 362 358 416 378 70 26 164 28 233 5 43 -15 89 -57 409 -375 236 -234 370 -360 388 -364 76 -19 141 46 123 122 -9 38 -693 720 -760 758 -27 16 -76 38 -110 51 l-61 22 -3 644 -2 645 108 5 c187 9 332 72 474 207 96 90 156 185 199 311 31 89 33 104 33 230 0 213 -19 241 -174 259 -208 23 -427 -45 -573 -179 -30 -28 -58 -50 -61 -50 -3 0 -6 114 -6 253 l0 252 70 73 c50 52 80 95 109 155 51 107 65 171 64 287 -2 153 -49 275 -155 402 -47 57 -151 128 -186 128 -67 0 -216 -142 -276 -263 -51 -104 -69 -192 -63 -307 8 -164 68 -299 180 -410 57 -57 57 -57 57 -118 l0 -61 -62 47 c-141 106 -318 156 -483 135 -57 -7 -96 -17 -113 -30 -40 -29 -54 -96 -49 -233 6 -188 61 -313 198 -451 62 -63 92 -85 170 -122 106 -51 156 -64 264 -74 l75 -6 0 -195 0 -194 -65 60 c-168 157 -415 240 -635 214 -91 -11 -100 -10 -100 17 0 32 -51 119 -90 155 -22 19 -58 45 -82 58 -42 22 -51 23 -413 28 l-369 5 -168 230 c-109 151 -185 245 -220 274 -29 24 -54 46 -55 50 -2 3 16 15 39 26 56 26 157 127 190 191 46 85 58 153 58 316 l0 148 69 0 c93 0 126 8 156 38 36 35 35 99 -1 136 -25 24 -33 26 -109 26 l-83 0 -4 118 c-5 135 -22 183 -89 251 -75 75 -109 81 -432 80 -214 0 -293 -4 -328 -15z m622 -214 c29 -29 30 -31 27 -122 l-3 -93 -320 0 -320 0 -3 65 c-4 87 4 127 33 156 l24 24 266 0 267 0 29 -30z m2254 -181 c131 -146 130 -385 -2 -547 l-36 -43 -34 33 c-19 18 -51 67 -71 107 -35 72 -37 79 -37 175 1 81 5 112 24 159 22 56 93 157 110 157 5 0 25 -19 46 -41z m-2257 -396 c-3 -153 -4 -160 -32 -211 -53 -94 -138 -145 -246 -146 -116 -1 -214 63 -261 169 -19 42 -23 74 -27 198 l-5 147 288 0 287 0 -4 -157z m1797 -533 c84 -29 162 -86 217 -157 60 -80 89 -158 96 -257 l5 -79 -73 7 c-126 13 -226 60 -310 146 -82 85 -130 199 -130 314 l0 59 68 -6 c37 -3 94 -15 127 -27z m-2051 -133 c29 -14 72 -42 95 -62 23 -21 123 -150 223 -286 140 -192 187 -250 211 -258 19 -7 165 -11 394 -11 399 0 408 -1 438 -60 20 -40 19 -79 -5 -118 -38 -62 -42 -62 -542 -62 l-453 0 -72 83 c-138 158 -149 167 -197 167 -58 0 -96 -38 -96 -97 0 -34 7 -49 45 -91 l45 -50 0 -231 0 -231 -300 0 -301 0 3 538 3 537 28 53 c53 101 136 170 236 199 68 19 179 10 245 -20z m3168 -187 c20 0 21 -4 15 -87 -10 -151 -68 -275 -176 -375 -105 -98 -241 -152 -369 -146 l-67 3 2 76 c2 91 14 142 55 226 58 119 177 225 307 274 55 20 173 40 199 33 8 -2 23 -4 34 -4z m-1309 -695 c291 -52 506 -309 507 -607 l0 -78 -83 0 c-165 0 -312 63 -432 184 -111 112 -169 241 -181 401 -10 121 11 132 189 100z m-953 -656 c77 -36 121 -77 161 -151 l34 -63 3 -601 c2 -385 -1 -611 -7 -628 -27 -69 -128 -84 -185 -27 l-31 31 -2 523 c-2 386 -6 528 -15 545 -27 52 -31 52 -541 52 -447 0 -479 1 -540 20 -125 39 -232 144 -276 273 l-20 57 682 -2 682 -3 55 -26z" />
                <path d="M770 373 c-28 -25 -33 -36 -33 -73 0 -37 5 -48 33 -73 28 -25 38 -28 74 -24 116 16 116 178 0 194 -36 4 -46 1 -74 -24z" />
              </g>
            </svg>
          </div>
          <div className="text">
            <h5>Organic and Fresh Harvest of Wheat</h5>
            <span className="sous-text lh-lg w70">
              Sit amet consectetur adipiscing elit sed eiusmod tempor
            </span>
          </div>
        </div>
        <div className="w34 features-item d-flex mb-30">
          <div className="Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              height="1em"
              width="1em"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none">
                <path d="M2524 5111 c-12 -5 -31 -22 -43 -38 -21 -25 -22 -37 -19 -135 3 -102 4 -109 31 -135 38 -38 96 -38 135 0 26 27 27 30 27 142 0 109 -1 116 -25 140 -28 28 -74 39 -106 26z" />
                <path d="M1976 4915 c-41 -22 -55 -44 -56 -88 0 -35 8 -47 68 -109 99 -104 154 -119 207 -56 45 54 31 100 -62 190 -50 49 -95 78 -121 78 -4 0 -20 -7 -36 -15z" />
                <path d="M2978 4841 c-68 -70 -78 -84 -78 -116 0 -47 24 -81 66 -95 50 -17 79 -2 163 85 62 63 71 78 71 110 0 54 -44 95 -101 95 -41 0 -48 -5 -121 -79z" />
                <path d="M2445 4566 c-150 -29 -310 -145 -389 -280 l-39 -66 -25 16 c-93 61 -166 84 -267 84 -151 0 -287 -76 -372 -208 -55 -85 -64 -129 -70 -317 -8 -257 16 -343 129 -461 32 -33 58 -67 58 -75 0 -10 -35 -22 -111 -41 -132 -32 -201 -63 -267 -123 -111 -100 -151 -202 -159 -405 -4 -117 -2 -140 14 -170 30 -57 43 -60 306 -60 l237 0 0 -200 c0 -231 7 -261 64 -285 28 -12 94 -15 329 -15 162 0 308 3 326 6 80 16 109 108 52 165 -27 27 -35 29 -99 29 l-70 0 -4 126 -3 126 -34 30 c-28 25 -39 29 -70 24 -23 -3 -46 -17 -63 -36 -27 -30 -28 -33 -28 -150 l0 -120 -100 0 -100 0 0 138 c0 76 5 164 11 196 24 132 107 243 221 296 58 27 354 108 363 99 2 -2 45 -98 95 -214 54 -124 102 -219 116 -232 17 -16 38 -23 64 -23 26 0 47 7 64 23 15 13 61 104 116 232 51 116 93 211 95 213 8 9 310 -73 364 -98 112 -53 196 -166 220 -296 6 -32 11 -120 11 -196 l0 -138 -99 0 -99 0 -4 126 -3 126 -34 30 c-28 25 -39 29 -70 24 -23 -3 -46 -17 -63 -36 -27 -30 -28 -33 -28 -150 l0 -120 -76 0 c-70 0 -78 -2 -105 -29 -57 -57 -28 -149 52 -165 18 -3 166 -6 331 -6 338 0 358 3 383 64 12 27 15 82 15 235 l0 200 250 3 250 3 27 28 c26 26 28 33 31 135 8 220 -36 351 -150 458 -76 69 -136 98 -279 133 -75 18 -109 30 -109 40 0 8 26 42 59 75 107 112 131 188 131 417 0 184 -9 242 -51 325 -75 149 -229 244 -396 244 -73 0 -172 -25 -220 -56 -13 -8 -34 -21 -47 -30 -24 -15 -25 -15 -47 28 -117 230 -378 355 -634 304z m213 -200 c131 -35 243 -149 276 -280 l7 -28 -43 24 c-142 83 -159 90 -189 84 -17 -3 -58 -30 -92 -61 -103 -93 -189 -124 -346 -125 l-94 0 6 59 c20 226 253 386 475 327z m-802 -282 c44 -27 94 -83 94 -105 0 -5 -17 -16 -37 -25 -82 -36 -180 -55 -306 -61 l-128 -6 7 29 c22 91 61 143 139 181 72 34 163 29 231 -13z m1615 26 c72 -20 146 -105 164 -187 l7 -33 -80 0 c-45 0 -115 5 -158 11 -82 11 -225 58 -231 75 -2 6 10 29 26 51 55 77 169 111 272 83z m-629 -227 l98 -57 0 -111 c0 -160 -29 -236 -123 -322 -59 -54 -109 -79 -191 -94 -168 -31 -340 60 -414 219 -22 47 -27 75 -30 160 l-4 102 98 0 c55 0 130 7 169 15 78 17 190 68 250 114 22 17 42 31 44 31 2 0 48 -26 103 -57z m-862 -177 c0 -140 -45 -229 -139 -278 -135 -71 -303 -1 -346 144 -8 28 -15 66 -15 83 l0 32 138 6 c129 6 279 33 321 57 33 20 41 12 41 -44z m1217 39 c76 -29 171 -46 307 -52 l138 -6 -5 -57 c-22 -249 -351 -318 -462 -97 -21 43 -25 65 -25 139 0 48 2 88 5 88 2 0 22 -7 42 -15z m-1044 -481 c48 -47 79 -83 69 -79 -9 4 -66 19 -126 33 -59 15 -111 32 -113 39 -4 10 66 87 83 93 1 0 40 -39 87 -86z m946 47 c26 -24 42 -45 38 -53 -3 -8 -40 -22 -88 -33 -46 -10 -102 -25 -123 -32 -22 -7 -41 -12 -42 -10 -2 2 18 19 44 38 26 20 63 57 82 82 19 26 37 46 40 46 3 0 25 -17 49 -38z m-1314 -151 c9 -56 48 -85 140 -105 41 -9 75 -18 75 -20 0 -2 -26 -11 -57 -20 -151 -44 -303 -164 -371 -292 l-33 -63 -206 0 -206 0 6 75 c10 117 47 186 125 236 30 19 94 40 200 65 179 44 212 63 212 128 l0 36 54 0 54 0 7 -40z m1665 4 c0 -64 34 -85 195 -123 77 -18 158 -41 180 -50 100 -44 152 -124 162 -251 l6 -80 -206 0 -206 0 -33 63 c-68 128 -220 248 -370 292 -32 9 -58 18 -58 20 0 2 34 11 75 20 92 20 132 50 141 106 l7 39 53 0 54 0 0 -36z m-770 -99 c0 -17 -27 -91 -59 -164 l-59 -134 -15 29 c-44 86 -107 246 -107 270 l0 29 120 0 120 0 0 -30z" />
                <path d="M290 3550 c-119 -14 -234 -111 -270 -227 -19 -63 -20 -92 -20 -888 0 -529 4 -852 11 -902 13 -97 59 -238 106 -323 40 -74 231 -346 263 -375 61 -55 177 17 156 98 -3 12 -53 90 -110 172 -58 83 -124 186 -145 230 -78 156 -75 107 -78 1062 -3 748 -2 856 11 882 46 89 171 98 230 18 21 -28 21 -38 26 -730 6 -771 4 -746 69 -877 48 -96 82 -139 268 -337 338 -361 361 -383 404 -383 26 0 47 8 68 26 26 22 31 33 31 70 0 43 -2 46 -217 275 -336 357 -325 343 -325 420 0 92 60 153 152 154 54 0 58 -2 240 -124 244 -164 320 -223 410 -317 125 -131 221 -292 283 -474 14 -41 66 -268 116 -505 94 -445 102 -471 153 -489 59 -21 128 27 128 89 0 36 -141 722 -179 871 -48 186 -140 379 -258 534 -54 72 -192 207 -273 269 -109 84 -437 301 -487 323 -102 45 -232 31 -332 -36 l-50 -34 -3 641 c-3 634 -3 643 -25 689 -62 136 -205 215 -353 198z" />
                <path d="M4645 3521 c-69 -32 -137 -100 -168 -169 -22 -46 -22 -55 -25 -689 l-3 -641 -50 34 c-100 67 -230 81 -332 36 -50 -22 -378 -239 -487 -323 -81 -62 -219 -197 -273 -269 -118 -155 -210 -348 -258 -534 -38 -149 -179 -835 -179 -871 0 -62 69 -110 128 -89 51 18 59 44 153 489 50 237 102 464 116 505 62 182 158 343 283 474 90 94 166 153 410 317 182 122 186 124 240 124 92 -1 152 -62 152 -154 0 -77 11 -63 -324 -420 -216 -229 -218 -232 -218 -275 0 -37 5 -48 31 -70 21 -18 42 -26 68 -26 43 0 66 22 404 383 186 198 220 241 268 337 65 131 63 106 69 877 5 692 5 702 26 730 59 80 184 71 229 -17 13 -25 15 -143 15 -843 0 -891 -2 -921 -58 -1057 -39 -90 -70 -137 -478 -711 -197 -277 -364 -521 -371 -542 -11 -32 -11 -42 2 -67 30 -58 85 -75 138 -42 31 19 804 1103 854 1198 44 83 90 224 102 317 7 50 11 373 11 902 0 796 -1 825 -20 888 -27 86 -89 156 -175 197 -53 25 -75 30 -141 30 -66 0 -89 -5 -139 -29z" />
                <path d="M2497 2136 c-90 -84 22 -223 120 -150 75 56 36 174 -57 174 -25 0 -45 -8 -63 -24z" />
                <path d="M595 677 c-17 -14 -28 -36 -32 -63 -4 -35 -1 -46 24 -74 22 -24 37 -32 66 -33 66 -2 118 59 103 119 -18 70 -107 98 -161 51z" />
                <path d="M798 380 c-50 -50 -39 -90 65 -235 83 -118 113 -145 160 -145 30 0 64 25 82 60 13 25 13 35 2 67 -16 46 -148 234 -184 263 -39 30 -88 26 -125 -10z" />
              </g>
            </svg>
          </div>
          <div className="text">
            <h5>Lot’s Of Professional & Expert Farmers</h5>
            <span className="sous-text lh-lg ">
              Sit amet consectetur adipiscing elit sed eiusmod tempor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modern;
