import React from "react";
import styles from "./styles/EnterAnimation.module.scss";

const EnterAnimation: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <svg
        width="1126"
        height="120"
        viewBox="0 0 1126 120"
        fill="none"
        className={styles.logo}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.4844 71.5859H19.4375V113H5.86719V10.625H39.7578C51.2891 10.625 60.1484 13.25 66.3359 18.5C72.5703 23.75 75.6875 31.3906 75.6875 41.4219C75.6875 47.7969 73.9531 53.3516 70.4844 58.0859C67.0625 62.8203 62.2812 66.3594 56.1406 68.7031L80.1875 112.156V113H65.7031L43.4844 71.5859ZM19.4375 60.5469H40.1797C46.8828 60.5469 52.2031 58.8125 56.1406 55.3438C60.125 51.875 62.1172 47.2344 62.1172 41.4219C62.1172 35.0938 60.2188 30.2422 56.4219 26.8672C52.6719 23.4922 47.2344 21.7812 40.1094 21.7344H19.4375V60.5469Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M106.766 113H93.7578V36.9219H106.766V113ZM92.7031 16.7422C92.7031 14.6328 93.3359 12.8516 94.6016 11.3984C95.9141 9.94531 97.8359 9.21875 100.367 9.21875C102.898 9.21875 104.82 9.94531 106.133 11.3984C107.445 12.8516 108.102 14.6328 108.102 16.7422C108.102 18.8516 107.445 20.6094 106.133 22.0156C104.82 23.4219 102.898 24.125 100.367 24.125C97.8359 24.125 95.9141 23.4219 94.6016 22.0156C93.3359 20.6094 92.7031 18.8516 92.7031 16.7422Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M158.164 103.789C162.805 103.789 166.859 102.383 170.328 99.5703C173.797 96.7578 175.719 93.2422 176.094 89.0234H188.398C188.164 93.3828 186.664 97.5312 183.898 101.469C181.133 105.406 177.43 108.547 172.789 110.891C168.195 113.234 163.32 114.406 158.164 114.406C147.805 114.406 139.555 110.961 133.414 104.07C127.32 97.1328 124.273 87.6641 124.273 75.6641V73.4844C124.273 66.0781 125.633 59.4922 128.352 53.7266C131.07 47.9609 134.961 43.4844 140.023 40.2969C145.133 37.1094 151.156 35.5156 158.094 35.5156C166.625 35.5156 173.703 38.0703 179.328 43.1797C185 48.2891 188.023 54.9219 188.398 63.0781H176.094C175.719 58.1562 173.844 54.125 170.469 50.9844C167.141 47.7969 163.016 46.2031 158.094 46.2031C151.484 46.2031 146.352 48.5938 142.695 53.375C139.086 58.1094 137.281 64.9766 137.281 73.9766V76.4375C137.281 85.2031 139.086 91.9531 142.695 96.6875C146.305 101.422 151.461 103.789 158.164 103.789Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M216.031 46.1328C221.797 39.0547 229.297 35.5156 238.531 35.5156C254.609 35.5156 262.719 44.5859 262.859 62.7266V113H249.852V62.6562C249.805 57.1719 248.539 53.1172 246.055 50.4922C243.617 47.8672 239.797 46.5547 234.594 46.5547C230.375 46.5547 226.672 47.6797 223.484 49.9297C220.297 52.1797 217.812 55.1328 216.031 58.7891V113H203.023V5H216.031V46.1328Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M329.305 113C328.555 111.5 327.945 108.828 327.477 104.984C321.43 111.266 314.211 114.406 305.82 114.406C298.32 114.406 292.156 112.297 287.328 108.078C282.547 103.812 280.156 98.4219 280.156 91.9062C280.156 83.9844 283.156 77.8438 289.156 73.4844C295.203 69.0781 303.688 66.875 314.609 66.875H327.266V60.8984C327.266 56.3516 325.906 52.7422 323.188 50.0703C320.469 47.3516 316.461 45.9922 311.164 45.9922C306.523 45.9922 302.633 47.1641 299.492 49.5078C296.352 51.8516 294.781 54.6875 294.781 58.0156H281.703C281.703 54.2188 283.039 50.5625 285.711 47.0469C288.43 43.4844 292.086 40.6719 296.68 38.6094C301.32 36.5469 306.406 35.5156 311.938 35.5156C320.703 35.5156 327.57 37.7188 332.539 42.125C337.508 46.4844 340.086 52.5078 340.273 60.1953V95.2109C340.273 102.195 341.164 107.75 342.945 111.875V113H329.305ZM307.719 103.086C311.797 103.086 315.664 102.031 319.32 99.9219C322.977 97.8125 325.625 95.0703 327.266 91.6953V76.0859H317.07C301.133 76.0859 293.164 80.75 293.164 90.0781C293.164 94.1562 294.523 97.3438 297.242 99.6406C299.961 101.938 303.453 103.086 307.719 103.086Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M397.438 48.5938C395.469 48.2656 393.336 48.1016 391.039 48.1016C382.508 48.1016 376.719 51.7344 373.672 59V113H360.664V36.9219H373.32L373.531 45.7109C377.797 38.9141 383.844 35.5156 391.672 35.5156C394.203 35.5156 396.125 35.8438 397.438 36.5V48.5938Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M404.891 74.3281C404.891 62.6562 407.656 53.2812 413.188 46.2031C418.719 39.0781 425.961 35.5156 434.914 35.5156C443.82 35.5156 450.875 38.5625 456.078 44.6562V5H469.086V113H457.133L456.5 104.844C451.297 111.219 444.055 114.406 434.773 114.406C425.961 114.406 418.766 110.797 413.188 103.578C407.656 96.3594 404.891 86.9375 404.891 75.3125V74.3281ZM417.898 75.8047C417.898 84.4297 419.68 91.1797 423.242 96.0547C426.805 100.93 431.727 103.367 438.008 103.367C446.258 103.367 452.281 99.6641 456.078 92.2578V57.3125C452.188 50.1406 446.211 46.5547 438.148 46.5547C431.773 46.5547 426.805 49.0156 423.242 53.9375C419.68 58.8594 417.898 66.1484 417.898 75.8047Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M490.25 39.4531L482.867 34.3906C487.227 28.2969 489.477 21.875 489.617 15.125V5H502.484V14.1406C502.438 18.8281 501.266 23.5156 498.969 28.2031C496.719 32.8438 493.812 36.5938 490.25 39.4531Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M554.586 92.8203C554.586 89.3047 553.25 86.5859 550.578 84.6641C547.953 82.6953 543.336 81.0078 536.727 79.6016C530.164 78.1953 524.938 76.5078 521.047 74.5391C517.203 72.5703 514.344 70.2266 512.469 67.5078C510.641 64.7891 509.727 61.5547 509.727 57.8047C509.727 51.5703 512.352 46.2969 517.602 41.9844C522.898 37.6719 529.648 35.5156 537.852 35.5156C546.477 35.5156 553.461 37.7422 558.805 42.1953C564.195 46.6484 566.891 52.3438 566.891 59.2812H553.812C553.812 55.7188 552.289 52.6484 549.242 50.0703C546.242 47.4922 542.445 46.2031 537.852 46.2031C533.117 46.2031 529.414 47.2344 526.742 49.2969C524.07 51.3594 522.734 54.0547 522.734 57.3828C522.734 60.5234 523.977 62.8906 526.461 64.4844C528.945 66.0781 533.422 67.6016 539.891 69.0547C546.406 70.5078 551.68 72.2422 555.711 74.2578C559.742 76.2734 562.719 78.7109 564.641 81.5703C566.609 84.3828 567.594 87.8281 567.594 91.9062C567.594 98.7031 564.875 104.164 559.438 108.289C554 112.367 546.945 114.406 538.273 114.406C532.18 114.406 526.789 113.328 522.102 111.172C517.414 109.016 513.734 106.016 511.062 102.172C508.438 98.2812 507.125 94.0859 507.125 89.5859H520.133C520.367 93.9453 522.102 97.4141 525.336 99.9922C528.617 102.523 532.93 103.789 538.273 103.789C543.195 103.789 547.133 102.805 550.086 100.836C553.086 98.8203 554.586 96.1484 554.586 92.8203Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M644.375 80.7266L646.344 94.2266L649.227 82.0625L669.477 10.625H680.867L700.625 82.0625L703.438 94.4375L705.617 80.6562L721.508 10.625H735.078L710.258 113H697.953L676.859 38.3984L675.242 30.5938L673.625 38.3984L651.758 113H639.453L614.703 10.625H628.203L644.375 80.7266Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M777.406 114.406C767.094 114.406 758.703 111.031 752.234 104.281C745.766 97.4844 742.531 88.4141 742.531 77.0703V74.6797C742.531 67.1328 743.961 60.4062 746.82 54.5C749.727 48.5469 753.758 43.9062 758.914 40.5781C764.117 37.2031 769.742 35.5156 775.789 35.5156C785.68 35.5156 793.367 38.7734 798.852 45.2891C804.336 51.8047 807.078 61.1328 807.078 73.2734V78.6875H755.539C755.727 86.1875 757.906 92.2578 762.078 96.8984C766.297 101.492 771.641 103.789 778.109 103.789C782.703 103.789 786.594 102.852 789.781 100.977C792.969 99.1016 795.758 96.6172 798.148 93.5234L806.094 99.7109C799.719 109.508 790.156 114.406 777.406 114.406ZM775.789 46.2031C770.539 46.2031 766.133 48.125 762.57 51.9688C759.008 55.7656 756.805 61.1094 755.961 68H794.07V67.0156C793.695 60.4062 791.914 55.2969 788.727 51.6875C785.539 48.0312 781.227 46.2031 775.789 46.2031Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M886.602 75.8047C886.602 87.4297 883.93 96.7812 878.586 103.859C873.242 110.891 866.07 114.406 857.07 114.406C847.461 114.406 840.031 111.008 834.781 104.211L834.148 113H822.195V5H835.203V45.2891C840.453 38.7734 847.695 35.5156 856.93 35.5156C866.164 35.5156 873.406 39.0078 878.656 45.9922C883.953 52.9766 886.602 62.5391 886.602 74.6797V75.8047ZM873.594 74.3281C873.594 65.4688 871.883 58.625 868.461 53.7969C865.039 48.9688 860.117 46.5547 853.695 46.5547C845.117 46.5547 838.953 50.5391 835.203 58.5078V91.4141C839.188 99.3828 845.398 103.367 853.836 103.367C860.07 103.367 864.922 100.953 868.391 96.125C871.859 91.2969 873.594 84.0312 873.594 74.3281Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M947.352 92.8203C947.352 89.3047 946.016 86.5859 943.344 84.6641C940.719 82.6953 936.102 81.0078 929.492 79.6016C922.93 78.1953 917.703 76.5078 913.812 74.5391C909.969 72.5703 907.109 70.2266 905.234 67.5078C903.406 64.7891 902.492 61.5547 902.492 57.8047C902.492 51.5703 905.117 46.2969 910.367 41.9844C915.664 37.6719 922.414 35.5156 930.617 35.5156C939.242 35.5156 946.227 37.7422 951.57 42.1953C956.961 46.6484 959.656 52.3438 959.656 59.2812H946.578C946.578 55.7188 945.055 52.6484 942.008 50.0703C939.008 47.4922 935.211 46.2031 930.617 46.2031C925.883 46.2031 922.18 47.2344 919.508 49.2969C916.836 51.3594 915.5 54.0547 915.5 57.3828C915.5 60.5234 916.742 62.8906 919.227 64.4844C921.711 66.0781 926.188 67.6016 932.656 69.0547C939.172 70.5078 944.445 72.2422 948.477 74.2578C952.508 76.2734 955.484 78.7109 957.406 81.5703C959.375 84.3828 960.359 87.8281 960.359 91.9062C960.359 98.7031 957.641 104.164 952.203 108.289C946.766 112.367 939.711 114.406 931.039 114.406C924.945 114.406 919.555 113.328 914.867 111.172C910.18 109.016 906.5 106.016 903.828 102.172C901.203 98.2812 899.891 94.0859 899.891 89.5859H912.898C913.133 93.9453 914.867 97.4141 918.102 99.9922C921.383 102.523 925.695 103.789 931.039 103.789C935.961 103.789 939.898 102.805 942.852 100.836C945.852 98.8203 947.352 96.1484 947.352 92.8203Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M991.438 113H978.43V36.9219H991.438V113ZM977.375 16.7422C977.375 14.6328 978.008 12.8516 979.273 11.3984C980.586 9.94531 982.508 9.21875 985.039 9.21875C987.57 9.21875 989.492 9.94531 990.805 11.3984C992.117 12.8516 992.773 14.6328 992.773 16.7422C992.773 18.8516 992.117 20.6094 990.805 22.0156C989.492 23.4219 987.57 24.125 985.039 24.125C982.508 24.125 980.586 23.4219 979.273 22.0156C978.008 20.6094 977.375 18.8516 977.375 16.7422Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M1029.97 18.5V36.9219H1044.17V46.9766H1029.97V94.1562C1029.97 97.2031 1030.6 99.5 1031.87 101.047C1033.13 102.547 1035.29 103.297 1038.34 103.297C1039.84 103.297 1041.9 103.016 1044.52 102.453V113C1041.1 113.938 1037.77 114.406 1034.54 114.406C1028.73 114.406 1024.34 112.648 1021.39 109.133C1018.44 105.617 1016.96 100.625 1016.96 94.1562V46.9766H1003.11V36.9219H1016.96V18.5H1029.97Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M1091 114.406C1080.69 114.406 1072.3 111.031 1065.83 104.281C1059.36 97.4844 1056.12 88.4141 1056.12 77.0703V74.6797C1056.12 67.1328 1057.55 60.4062 1060.41 54.5C1063.32 48.5469 1067.35 43.9062 1072.51 40.5781C1077.71 37.2031 1083.34 35.5156 1089.38 35.5156C1099.27 35.5156 1106.96 38.7734 1112.45 45.2891C1117.93 51.8047 1120.67 61.1328 1120.67 73.2734V78.6875H1069.13C1069.32 86.1875 1071.5 92.2578 1075.67 96.8984C1079.89 101.492 1085.23 103.789 1091.7 103.789C1096.3 103.789 1100.19 102.852 1103.38 100.977C1106.56 99.1016 1109.35 96.6172 1111.74 93.5234L1119.69 99.7109C1113.31 109.508 1103.75 114.406 1091 114.406ZM1089.38 46.2031C1084.13 46.2031 1079.73 48.125 1076.16 51.9688C1072.6 55.7656 1070.4 61.1094 1069.55 68H1107.66V67.0156C1107.29 60.4062 1105.51 55.2969 1102.32 51.6875C1099.13 48.0312 1094.82 46.2031 1089.38 46.2031Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
          mask="url(#path-1-outside-1)"
        />
      </svg>
    </div>
  );
};

export default EnterAnimation;
