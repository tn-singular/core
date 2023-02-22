import { FolderApi } from '@tweakpane/core';
import { Pane } from 'tweakpane';

declare const tw: {
    readonly black: {
        readonly r: 0;
        readonly g: 0;
        readonly b: 0;
        readonly a: 1;
    };
    readonly white: {
        readonly r: 255;
        readonly g: 255;
        readonly b: 255;
        readonly a: 1;
    };
    readonly slate: {
        readonly '50': {
            readonly r: 248;
            readonly g: 250;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 241;
            readonly g: 245;
            readonly b: 249;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 226;
            readonly g: 232;
            readonly b: 240;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 203;
            readonly g: 213;
            readonly b: 225;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 148;
            readonly g: 163;
            readonly b: 184;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 100;
            readonly g: 116;
            readonly b: 139;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 71;
            readonly g: 85;
            readonly b: 105;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 51;
            readonly g: 65;
            readonly b: 85;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 30;
            readonly g: 41;
            readonly b: 59;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 15;
            readonly g: 23;
            readonly b: 42;
            readonly a: 1;
        };
    };
    readonly gray: {
        readonly '50': {
            readonly r: 249;
            readonly g: 250;
            readonly b: 251;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 243;
            readonly g: 244;
            readonly b: 246;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 229;
            readonly g: 231;
            readonly b: 235;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 209;
            readonly g: 213;
            readonly b: 219;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 156;
            readonly g: 163;
            readonly b: 175;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 107;
            readonly g: 114;
            readonly b: 128;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 75;
            readonly g: 85;
            readonly b: 99;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 55;
            readonly g: 65;
            readonly b: 81;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 31;
            readonly g: 41;
            readonly b: 55;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 17;
            readonly g: 24;
            readonly b: 39;
            readonly a: 1;
        };
    };
    readonly zinc: {
        readonly '50': {
            readonly r: 250;
            readonly g: 250;
            readonly b: 250;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 244;
            readonly g: 244;
            readonly b: 245;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 228;
            readonly g: 228;
            readonly b: 231;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 212;
            readonly g: 212;
            readonly b: 216;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 161;
            readonly g: 161;
            readonly b: 170;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 113;
            readonly g: 113;
            readonly b: 122;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 82;
            readonly g: 82;
            readonly b: 91;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 63;
            readonly g: 63;
            readonly b: 70;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 39;
            readonly g: 39;
            readonly b: 42;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 24;
            readonly g: 24;
            readonly b: 27;
            readonly a: 1;
        };
    };
    readonly neutral: {
        readonly '50': {
            readonly r: 250;
            readonly g: 250;
            readonly b: 250;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 245;
            readonly g: 245;
            readonly b: 245;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 229;
            readonly g: 229;
            readonly b: 229;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 212;
            readonly g: 212;
            readonly b: 212;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 163;
            readonly g: 163;
            readonly b: 163;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 115;
            readonly g: 115;
            readonly b: 115;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 82;
            readonly g: 82;
            readonly b: 82;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 64;
            readonly g: 64;
            readonly b: 64;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 38;
            readonly g: 38;
            readonly b: 38;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 23;
            readonly g: 23;
            readonly b: 23;
            readonly a: 1;
        };
    };
    readonly stone: {
        readonly '50': {
            readonly r: 250;
            readonly g: 250;
            readonly b: 249;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 245;
            readonly g: 245;
            readonly b: 244;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 231;
            readonly g: 229;
            readonly b: 228;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 214;
            readonly g: 211;
            readonly b: 209;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 168;
            readonly g: 162;
            readonly b: 158;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 120;
            readonly g: 113;
            readonly b: 108;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 87;
            readonly g: 83;
            readonly b: 78;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 68;
            readonly g: 64;
            readonly b: 60;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 41;
            readonly g: 37;
            readonly b: 36;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 28;
            readonly g: 25;
            readonly b: 23;
            readonly a: 1;
        };
    };
    readonly red: {
        readonly '50': {
            readonly r: 254;
            readonly g: 242;
            readonly b: 242;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 254;
            readonly g: 226;
            readonly b: 226;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 254;
            readonly g: 202;
            readonly b: 202;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 252;
            readonly g: 165;
            readonly b: 165;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 248;
            readonly g: 113;
            readonly b: 113;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 239;
            readonly g: 68;
            readonly b: 68;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 220;
            readonly g: 38;
            readonly b: 38;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 185;
            readonly g: 28;
            readonly b: 28;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 153;
            readonly g: 27;
            readonly b: 27;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 127;
            readonly g: 29;
            readonly b: 29;
            readonly a: 1;
        };
    };
    readonly orange: {
        readonly '50': {
            readonly r: 255;
            readonly g: 247;
            readonly b: 237;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 255;
            readonly g: 237;
            readonly b: 213;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 254;
            readonly g: 215;
            readonly b: 170;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 253;
            readonly g: 186;
            readonly b: 116;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 251;
            readonly g: 146;
            readonly b: 60;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 249;
            readonly g: 115;
            readonly b: 22;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 234;
            readonly g: 88;
            readonly b: 12;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 194;
            readonly g: 65;
            readonly b: 12;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 154;
            readonly g: 52;
            readonly b: 18;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 124;
            readonly g: 45;
            readonly b: 18;
            readonly a: 1;
        };
    };
    readonly amber: {
        readonly '50': {
            readonly r: 255;
            readonly g: 251;
            readonly b: 235;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 254;
            readonly g: 243;
            readonly b: 199;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 253;
            readonly g: 230;
            readonly b: 138;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 252;
            readonly g: 211;
            readonly b: 77;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 251;
            readonly g: 191;
            readonly b: 36;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 245;
            readonly g: 158;
            readonly b: 11;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 217;
            readonly g: 119;
            readonly b: 6;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 180;
            readonly g: 83;
            readonly b: 9;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 146;
            readonly g: 64;
            readonly b: 14;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 120;
            readonly g: 53;
            readonly b: 15;
            readonly a: 1;
        };
    };
    readonly yellow: {
        readonly '50': {
            readonly r: 254;
            readonly g: 252;
            readonly b: 232;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 254;
            readonly g: 249;
            readonly b: 195;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 254;
            readonly g: 240;
            readonly b: 138;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 253;
            readonly g: 224;
            readonly b: 71;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 250;
            readonly g: 204;
            readonly b: 21;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 234;
            readonly g: 179;
            readonly b: 8;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 202;
            readonly g: 138;
            readonly b: 4;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 161;
            readonly g: 98;
            readonly b: 7;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 133;
            readonly g: 77;
            readonly b: 14;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 113;
            readonly g: 63;
            readonly b: 18;
            readonly a: 1;
        };
    };
    readonly lime: {
        readonly '50': {
            readonly r: 247;
            readonly g: 254;
            readonly b: 231;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 236;
            readonly g: 252;
            readonly b: 203;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 217;
            readonly g: 249;
            readonly b: 157;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 190;
            readonly g: 242;
            readonly b: 100;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 163;
            readonly g: 230;
            readonly b: 53;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 132;
            readonly g: 204;
            readonly b: 22;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 101;
            readonly g: 163;
            readonly b: 13;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 77;
            readonly g: 124;
            readonly b: 15;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 63;
            readonly g: 98;
            readonly b: 18;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 54;
            readonly g: 83;
            readonly b: 20;
            readonly a: 1;
        };
    };
    readonly green: {
        readonly '50': {
            readonly r: 240;
            readonly g: 253;
            readonly b: 244;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 220;
            readonly g: 252;
            readonly b: 231;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 187;
            readonly g: 247;
            readonly b: 208;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 134;
            readonly g: 239;
            readonly b: 172;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 74;
            readonly g: 222;
            readonly b: 128;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 34;
            readonly g: 197;
            readonly b: 94;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 22;
            readonly g: 163;
            readonly b: 74;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 21;
            readonly g: 128;
            readonly b: 61;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 22;
            readonly g: 101;
            readonly b: 52;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 20;
            readonly g: 83;
            readonly b: 45;
            readonly a: 1;
        };
    };
    readonly emerald: {
        readonly '50': {
            readonly r: 236;
            readonly g: 253;
            readonly b: 245;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 209;
            readonly g: 250;
            readonly b: 229;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 167;
            readonly g: 243;
            readonly b: 208;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 110;
            readonly g: 231;
            readonly b: 183;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 52;
            readonly g: 211;
            readonly b: 153;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 16;
            readonly g: 185;
            readonly b: 129;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 5;
            readonly g: 150;
            readonly b: 105;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 4;
            readonly g: 120;
            readonly b: 87;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 6;
            readonly g: 95;
            readonly b: 70;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 6;
            readonly g: 78;
            readonly b: 59;
            readonly a: 1;
        };
    };
    readonly teal: {
        readonly '50': {
            readonly r: 240;
            readonly g: 253;
            readonly b: 250;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 204;
            readonly g: 251;
            readonly b: 241;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 153;
            readonly g: 246;
            readonly b: 228;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 94;
            readonly g: 234;
            readonly b: 212;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 45;
            readonly g: 212;
            readonly b: 191;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 20;
            readonly g: 184;
            readonly b: 166;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 13;
            readonly g: 148;
            readonly b: 136;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 15;
            readonly g: 118;
            readonly b: 110;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 17;
            readonly g: 94;
            readonly b: 89;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 19;
            readonly g: 78;
            readonly b: 74;
            readonly a: 1;
        };
    };
    readonly cyan: {
        readonly '50': {
            readonly r: 236;
            readonly g: 254;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 207;
            readonly g: 250;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 165;
            readonly g: 243;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 103;
            readonly g: 232;
            readonly b: 249;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 34;
            readonly g: 211;
            readonly b: 238;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 6;
            readonly g: 182;
            readonly b: 212;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 8;
            readonly g: 145;
            readonly b: 178;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 14;
            readonly g: 116;
            readonly b: 144;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 21;
            readonly g: 94;
            readonly b: 117;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 22;
            readonly g: 78;
            readonly b: 99;
            readonly a: 1;
        };
    };
    readonly sky: {
        readonly '50': {
            readonly r: 240;
            readonly g: 249;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 224;
            readonly g: 242;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 186;
            readonly g: 230;
            readonly b: 253;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 125;
            readonly g: 211;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 56;
            readonly g: 189;
            readonly b: 248;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 14;
            readonly g: 165;
            readonly b: 233;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 2;
            readonly g: 132;
            readonly b: 199;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 3;
            readonly g: 105;
            readonly b: 161;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 7;
            readonly g: 89;
            readonly b: 133;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 12;
            readonly g: 74;
            readonly b: 110;
            readonly a: 1;
        };
    };
    readonly blue: {
        readonly '50': {
            readonly r: 239;
            readonly g: 246;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 219;
            readonly g: 234;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 191;
            readonly g: 219;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 147;
            readonly g: 197;
            readonly b: 253;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 96;
            readonly g: 165;
            readonly b: 250;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 59;
            readonly g: 130;
            readonly b: 246;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 37;
            readonly g: 99;
            readonly b: 235;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 29;
            readonly g: 78;
            readonly b: 216;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 30;
            readonly g: 64;
            readonly b: 175;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 30;
            readonly g: 58;
            readonly b: 138;
            readonly a: 1;
        };
    };
    readonly indigo: {
        readonly '50': {
            readonly r: 238;
            readonly g: 242;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 224;
            readonly g: 231;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 199;
            readonly g: 210;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 165;
            readonly g: 180;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 129;
            readonly g: 140;
            readonly b: 248;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 99;
            readonly g: 102;
            readonly b: 241;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 79;
            readonly g: 70;
            readonly b: 229;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 67;
            readonly g: 56;
            readonly b: 202;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 55;
            readonly g: 48;
            readonly b: 163;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 49;
            readonly g: 46;
            readonly b: 129;
            readonly a: 1;
        };
    };
    readonly violet: {
        readonly '50': {
            readonly r: 245;
            readonly g: 243;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 237;
            readonly g: 233;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 221;
            readonly g: 214;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 196;
            readonly g: 181;
            readonly b: 253;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 167;
            readonly g: 139;
            readonly b: 250;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 139;
            readonly g: 92;
            readonly b: 246;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 124;
            readonly g: 58;
            readonly b: 237;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 109;
            readonly g: 40;
            readonly b: 217;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 91;
            readonly g: 33;
            readonly b: 182;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 76;
            readonly g: 29;
            readonly b: 149;
            readonly a: 1;
        };
    };
    readonly purple: {
        readonly '50': {
            readonly r: 250;
            readonly g: 245;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 243;
            readonly g: 232;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 233;
            readonly g: 213;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 216;
            readonly g: 180;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 192;
            readonly g: 132;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 168;
            readonly g: 85;
            readonly b: 247;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 147;
            readonly g: 51;
            readonly b: 234;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 126;
            readonly g: 34;
            readonly b: 206;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 107;
            readonly g: 33;
            readonly b: 168;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 88;
            readonly g: 28;
            readonly b: 135;
            readonly a: 1;
        };
    };
    readonly fuchsia: {
        readonly '50': {
            readonly r: 253;
            readonly g: 244;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 250;
            readonly g: 232;
            readonly b: 255;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 245;
            readonly g: 208;
            readonly b: 254;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 240;
            readonly g: 171;
            readonly b: 252;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 232;
            readonly g: 121;
            readonly b: 249;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 217;
            readonly g: 70;
            readonly b: 239;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 192;
            readonly g: 38;
            readonly b: 211;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 162;
            readonly g: 28;
            readonly b: 175;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 134;
            readonly g: 25;
            readonly b: 143;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 112;
            readonly g: 26;
            readonly b: 117;
            readonly a: 1;
        };
    };
    readonly pink: {
        readonly '50': {
            readonly r: 253;
            readonly g: 242;
            readonly b: 248;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 252;
            readonly g: 231;
            readonly b: 243;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 251;
            readonly g: 207;
            readonly b: 232;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 249;
            readonly g: 168;
            readonly b: 212;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 244;
            readonly g: 114;
            readonly b: 182;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 236;
            readonly g: 72;
            readonly b: 153;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 219;
            readonly g: 39;
            readonly b: 119;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 190;
            readonly g: 24;
            readonly b: 93;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 157;
            readonly g: 23;
            readonly b: 77;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 131;
            readonly g: 24;
            readonly b: 67;
            readonly a: 1;
        };
    };
    readonly rose: {
        readonly '50': {
            readonly r: 255;
            readonly g: 241;
            readonly b: 242;
            readonly a: 1;
        };
        readonly '100': {
            readonly r: 255;
            readonly g: 228;
            readonly b: 230;
            readonly a: 1;
        };
        readonly '200': {
            readonly r: 254;
            readonly g: 205;
            readonly b: 211;
            readonly a: 1;
        };
        readonly '300': {
            readonly r: 253;
            readonly g: 164;
            readonly b: 175;
            readonly a: 1;
        };
        readonly '400': {
            readonly r: 251;
            readonly g: 113;
            readonly b: 133;
            readonly a: 1;
        };
        readonly '500': {
            readonly r: 244;
            readonly g: 63;
            readonly b: 94;
            readonly a: 1;
        };
        readonly '600': {
            readonly r: 225;
            readonly g: 29;
            readonly b: 72;
            readonly a: 1;
        };
        readonly '700': {
            readonly r: 190;
            readonly g: 18;
            readonly b: 60;
            readonly a: 1;
        };
        readonly '800': {
            readonly r: 159;
            readonly g: 18;
            readonly b: 57;
            readonly a: 1;
        };
        readonly '900': {
            readonly r: 136;
            readonly g: 19;
            readonly b: 55;
            readonly a: 1;
        };
    };
};

declare const hexToRGBA: (hex: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
} | undefined;

declare const easingKeys: ("linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine")[];
type EasingKeys = (typeof easingKeys)[number];
type EasingHandles = [number, number, number, number];
declare const eases: {
    handles: Record<"linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine", EasingHandles>;
    css: Record<"linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine", string>;
    selections: {
        id: "linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine";
        title: "Linear" | "Circ InOut" | "Circ In" | "Circ Out" | "Power4 InOut" | "Power4 In" | "Power4 Out" | "Power3 InOut" | "Power3 In" | "Power3 Out" | "Power2 InOut" | "Power2 In" | "Power2 Out" | "Power5 InOut" | "Power5 In" | "Power5 Out" | "Spring InOut" | "Spring In" | "Spring Out" | "Quick Spring" | "Quick Spring2" | "Quick Spring3" | "Expo InOut" | "Expo In" | "Expo Out" | "Sine InOut" | "Sine In" | "Sine Out";
    }[];
};

declare function lerp(t: number, v0: number, v1: number): number;
declare function interpolate(t: number, [i0, i1]: [number, number], [o0, o1]: [number, number]): number;
declare function loop(min: number, max: number, freq: number): (frame: number) => number;

type Seconds = number;
type Milliseconds = number;
type UnitInterval = number;
type Tinycolor = {
    r: number;
    g: number;
    b: number;
    a: number;
};
type Hex = `#${string}`;
type Serializable = string | number | boolean | object;
type Alignment = 'left' | 'right' | 'center' | 'justify';
type Expand<T> = T extends T ? {
    [K in keyof T]: T[K];
} : never;
type ExpandRecursively<T> = T extends object ? T extends T ? {
    [K in keyof T]: ExpandRecursively<T[K]>;
} : never : T;
type WidenBoolean<T> = T extends boolean ? boolean : T;
type AllKeys<T> = T extends unknown ? keyof T : never;
type AddMissingProps<T, K extends PropertyKey = AllKeys<T>> = T extends unknown ? T & Record<Exclude<K, keyof T>, never> : never;
type SetOptional<T, K extends keyof T> = Expand<Partial<Pick<T, K>> & Omit<T, K>>;
type Optionals<T> = {
    [K in keyof T as T extends Record<K, unknown> ? never : K]: T[K];
};
type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never;
type UnionToIntersection<U> = Expand<(U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never>;

type Driver = {
    id: string;
    position: number | string;
    driverNo: number;
    firstname: string;
    lastname: string;
    name: string;
    team?: string;
    nation?: string;
    class?: {
        name?: string;
        bg?: string;
        fg?: string;
    };
};
type MotorsportTime = {
    display: string;
    raw: number | null;
    prefix?: string;
    infix?: string;
    postfix?: string;
};
type RaceLap = {
    lap?: number;
    lastlap: MotorsportTime;
    interval: MotorsportTime;
    behind: MotorsportTime;
    delta: MotorsportTime;
    total: MotorsportTime;
    best: MotorsportTime;
    lastLapDiff?: MotorsportTime;
    speed?: MotorsportTime;
    progress?: number;
    status?: string;
    sectors?: (MotorsportTime & {
        best?: MotorsportTime;
    })[];
    change?: number;
};
type Motorsport = {
    driver: Driver;
    lap: {
        race: RaceLap;
        qual: RaceLap;
    };
    grid: Driver & {
        qual: MotorsportTime;
    };
};
type MotorsportRecord = 'personal' | 'class' | 'track' | 'none' | null;
type MotorsportDriver = Driver;
type MotorsportRaceLap = RaceLap;
type MotorsportRow = Expand<Driver & RaceLap>;
type MotorsportMarker = ({
    className?: string;
    position?: number;
} & {
    marker: 'up';
}) | {
    marker: 'down';
} | {
    marker: 'finished';
};
type MotorsportBestLap = {
    className?: string;
    position?: number;
    time: MotorsportTime | null;
    name: string;
    lap?: number;
};
type MotorsportLiveResults = {
    title: string | undefined;
    rows: MotorsportRow[];
    markers: MotorsportMarker[];
    bestLap?: MotorsportBestLap;
    intervals: {
        interval: MotorsportTime;
        position: number | string;
    }[];
};
type MotorsportLive = {
    results: MotorsportLiveResults[];
    flag?: string;
    raceTitle: string;
    currentLap: number;
    lapsToGo?: number;
    time?: {
        elapsed?: string;
        remaining?: string;
    };
    source: string;
};
type GridData = {
    row: number;
    pos1: MotorsportRow['position'] | string;
    name1: MotorsportRow['name'];
    lastname1: MotorsportRow['lastname'];
    driverNo1: MotorsportRow['driverNo'] | string;
    time1?: MotorsportTime['display'];
    behind1?: MotorsportTime['display'];
    pos2: MotorsportRow['position'] | string;
    name2: MotorsportRow['name'];
    lastname2: MotorsportRow['lastname'];
    driverNo2: MotorsportRow['driverNo'] | string;
    time2?: MotorsportTime['display'];
    behind2?: MotorsportTime['display'];
};

interface SingularAnimation {
    TimelineLabel: 'In' | 'Out';
    TimelineAnchor: 'In' | 'Out1' | 'Out2';
    Event: Expand<PlayEvent | InitEvent | SeekEvent | JumpEvent>;
    EventTerse: PlayEvent | InitEvent | SeekEvent | JumpEvent;
    PlayEvent: Expand<PlayEvent>;
    InitEvent: Expand<InitEvent>;
    SeekEvent: Expand<SeekEvent>;
    JumpEvent: Expand<JumpEvent>;
    PlayEventTerse: PlayEvent;
    InitEventTerse: InitEvent;
    SeekEventTerse: SeekEvent;
    JumpEventTerse: JumpEvent;
}
/**
 * Triggered on the *start / stop* of an animation
 */
interface PlayEvent {
    /**
     * A message is sent for each event. `stop` is only sent if the TX is not interrupted
     */
    event: 'start' | 'stop';
    /** `Out` only on Out TX of a 2-Timeline animation */
    timeline: TimelineLabel;
    /** Duration of animation in seconds */
    duration: number;
    /** Play event always has value `play` */
    animationEvent: 'play';
    /** `backward` only on Out TX of 1-Timeline animation */
    direction: TimelineDirection;
    /**
     * `In` on Out TX.
     *
     * `Out1` on In TX.
     *
     * `Out2` on In TX when previous Out TX was interrupted
     *
     * (Can this ever be `Out`?)
     */
    oldState: TimelineAnchor;
    /**
     * In` on In TX.
     *
     * `Out1` on Out TX of 1-Timeline animation
     *
     * `Out2` on Out TX of 2-Timeline animation
     *
     * (Can this ever be `Out`?)
     */
    newState: TimelineAnchor;
    /** Current time of TX in seconds*/
    time: number;
}
/**
 * **Triggered on page load or settings change of an animation**
 *
 * @param timeline An init message is sent for each timeline
 * @param state SimpleTimeline when 1-Timeline, else Timeline. *`Out2` is on page load during any already-running animation to that state*
 */
interface InitEvent {
    animationEvent: 'play';
    direction: 'forward';
    duration: number;
    event: 'init';
    newState: TimelineAnchor;
    oldState: TimelineAnchor;
    state: TimelineAnchor;
    timeline: TimelineLabel;
}
/**
 * **Triggered when manually moving the playhead of the timeline**
 *
 * @param timeline Which timeline is being scrubbed
 * @param time The current time of the playhead
 * @param duration The duration of the animation
 */
interface SeekEvent {
    event: 'seek';
    timeline: TimelineAnchor;
    duration: number;
    time: number;
}
/**
 * Based on Bodymovin source, this indicates jumping to the start or end of the animation
 * WIP
 */
interface JumpEvent {
    animationEvent: 'jump';
    direction: 'forward';
    duration: number;
    event: 'jump';
    newState: TimelineAnchor;
    oldState: TimelineAnchor;
    time: number;
    timeline: TimelineLabel;
}
type TimelineLabel = 'In' | 'Out';
type TimelineAnchor = 'In' | 'Out1' | 'Out2';
type TimelineDirection = 'forward' | 'backward';

type SingularWidgetArgs = {
    onInit: (...args: unknown[]) => unknown;
    onValue: (json: Record<string, unknown>) => unknown;
    onButtonClicked?: (buttonId: string) => unknown;
    onEditComp?: (...args: unknown[]) => unknown;
    onAnimation?: (event: SingularAnimation['Event']) => unknown;
};

declare global {
    let SingularWidget: {
        init: (args: SingularWidgetArgs) => void;
        compositionId: string;
        createTimeControl: () => unknown;
        getStyle: (id: string) => unknown;
        importComposition: (url: string, importCallback: unknown) => unknown;
        importCompositionFromJSON: (compJSON: unknown, importCallback: unknown) => unknown;
        instanceId: undefined;
        instantiate: (compName: string, domTarget: unknown, instantiateCallback: unknown) => unknown;
        log: {
            info: () => unknown;
            warn: () => unknown;
            error: () => unknown;
        };
        removeComposition: (compId: string) => unknown;
        sendCustomMessage: (obj: unknown) => unknown;
        tileId: string;
        tileName: string;
        widgetId: number;
        widgetVersion: undefined;
    };
}

type ButtonField = {
    type: 'button';
    id: string;
    title: string;
    defaultValue?: never;
    disabled?: boolean;
    hidden?: boolean;
};
declare function createButtonField(options?: Omit<FieldInput<ButtonField>, 'id'>): ButtonField;

type CheckboxField = {
    type: 'checkbox';
    id: string;
    title: string;
    defaultValue: boolean;
    disabled?: boolean;
    hidden?: boolean;
};
declare function createCheckboxField(boolean: boolean, options?: FieldInput<CheckboxField>): CheckboxField;

type ColorField = {
    type: 'color';
    id: string;
    title: string;
    defaultValue: Tinycolor;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<Tinycolor>;
};
declare function createColorField(color?: Tinycolor | Hex, options?: FieldInput<ColorField>): ColorField;

type FontField = {
    type: 'font';
    id: string;
    title: string;
    defaultValue: {
        fontData: {
            family: string;
            weight: string;
        };
        alignment: Alignment;
        italic: boolean;
        underline: boolean;
    };
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<FontField['defaultValue']>;
};
type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
declare function createFontField({ family, weight, alignment, italic, underline, ...options }: {
    family?: string;
    weight?: Weight;
} & FieldInput<FontField> & Partial<Omit<FontField['defaultValue'], 'fontData'>>): FontField;

type GradientField = {
    type: 'gradient';
    id: string;
    title: string;
    defaultValue: {
        type: 'solid' | 'linear' | 'radial';
        solidColor: Tinycolor;
        stops: {
            color: Hex;
            offset: UnitInterval;
            opacity: UnitInterval;
        }[];
        offset: number;
        angle: number;
        scale: number;
        centerX: number;
        centerY: number;
        radius: number;
        focalAngle: number;
        focalDistance: number;
        spreadMethod: 'pad' | 'reflect' | 'repeat';
        keepAspect: boolean;
    };
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
};
declare function createGradientField(stops?: Hex[], options?: FieldInput<GradientField>): GradientField;

type ImageField = {
    type: 'image';
    id: string;
    title: string;
    defaultValue: string;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
};
declare function createImageField(url?: string, options?: FieldInput<ImageField>): ImageField;

type InfoField = {
    type: 'info';
    id: string;
    title: string;
    defaultValue: string;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
};
declare function createInfoField(str: string, options?: FieldInput<InfoField>): InfoField;

type JSONField = {
    type: 'json';
    id: string;
    title: string;
    defaultValue: Record<string, unknown>;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<Record<string, unknown>>;
    /**
     * width in pixels
     */
    width: number;
    /**
     * height in pixels
     */
    height: number;
};
declare function createJSONField(obj: Record<string, unknown>, options?: FieldInput<JSONField>): JSONField;

type NumberField = {
    type: 'number';
    id: string;
    title: string;
    defaultValue: number;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<number>;
    /**
     * minimum value allowed
     */
    min?: number;
    /**
     * maximum value allowed
     */
    max?: number;
    /**
     * step for value changes when using up and down arrows
     */
    step?: number;
    /**
     * show a unit string in the input field next to the number
     */
    unit?: string;
    /**
     * number format, defines how many digits are shown
     */
    format?: string;
};
declare function createNumberField(number: number, options?: FieldInput<NumberField>): NumberField;

type SelectionField = {
    type: 'selection';
    id: string;
    title: string;
    defaultValue: string;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
    selections: {
        id: string;
        title: string;
    }[];
};
declare function createSelectionField(selection: string, selections: string[], options?: FieldInput<SelectionField>): SelectionField;

type TextField = {
    type: 'text';
    id: string;
    title: string;
    defaultValue: string;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
};
declare function createTextField(str?: string, options?: FieldInput<TextField>): TextField;

type TextAreaField = {
    type: 'textarea';
    id: string;
    title: string;
    defaultValue: string;
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<string>;
    /**
     * number of rows
     */
    rows: number;
    /**
     * number of columns
     */
    cols: number;
};
declare function createTextAreaField(str?: string, options?: FieldInput<TextAreaField>): TextAreaField;

type TimeControlField = {
    type: 'timecontrol';
    id: string;
    title: string;
    defaultValue: {
        ms: number;
        UTC: number;
        isRunning: boolean;
    };
    disabled?: boolean;
    hidden?: boolean;
    parser: Parser<TimeControlField['defaultValue']>;
};
declare function createTimeControlField(options?: FieldInput<TimeControlField>): TimeControlField;

declare const ui: {
    button: typeof createButtonField;
    checkbox: typeof createCheckboxField;
    color: typeof createColorField;
    font: typeof createFontField;
    gradient: typeof createGradientField;
    image: typeof createImageField;
    info: typeof createInfoField;
    json: typeof createJSONField;
    number: typeof createNumberField;
    selection: typeof createSelectionField;
    text: typeof createTextField;
    textarea: typeof createTextAreaField;
    timecontrol: typeof createTimeControlField;
};

type WidenFieldValue<T> = WidenBoolean<T>;
type Parser<T extends Serializable = Serializable> = (value?: Serializable) => T;
type Parsers = Record<string, Parser>;
type ButtonCallback = (id: string) => void;
type ButtonHandlers<T extends string[] = string[]> = Record<T[number], ButtonCallback>;
type FieldInput<T> = Partial<Omit<T, 'id'>>;
type UIFields = {
    [K in keyof typeof ui]: ReturnType<(typeof ui)[K]>;
};
type UIField = UIFields[keyof UIFields];
type UIFieldInput = FieldInput<UIFields[keyof UIFields]>;
type UIFieldsInput = DistributiveOmit<Partial<UIField>, 'id'>;
type UIGroupInput = Partial<Omit<UIGroup, 'childIds'>> & {
    /**
     * object containing the fields definitions
     */
    fields: Record<string, UIField>;
};
type UIGroup = {
    id: string;
    /**
     * text shown in the header of the UI panel
     */
    title: string;
    /**
     * defines the width of the panel
     * anything other than “double” defines a standard width panel
     */
    width: 'double' | 'single';
    /**
     * the tool tip text is shown on *mouseover* on the `i` icon
     */
    tooltip?: string;
    /**
     * array containing the IDs of fields defined in the `fields` section.
     */
    childIds: string[];
    /**
     * the ID of a `checkbox` field that will be shown in the header of the panel.
     * NOTE: The `checkbox` field has to be defined as part of the `fields` array before it is attached to a group using the activeId `definition`!
     */
    activeId?: string;
};
type Model = {
    fields: Omit<UIField, 'parser'>[];
    groups: UIGroup[];
};

declare function addTweakpaneInputs({ controls, model, parsers, buttonHandlers, }: {
    controls: any;
    model: Model;
    parsers: Parsers;
    buttonHandlers: ButtonHandlers;
}): {
    pane: Pane;
    folders: FolderApi[];
};

declare const initGui: typeof addTweakpaneInputs;

declare function defineUI<T extends Record<string, UIGroupInput>>(ui: T): {
    model: Model;
    buttons: (keyof ((AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never) extends infer T_1 ? { [K in keyof T_1 as (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K] extends {
        type: 'button';
    } ? K : never]: K; } : never))[];
    controls: (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never) extends infer T_3 ? { [K_2 in keyof T_3 as (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2] extends {
        type: 'button';
    } ? never : K_2]: WidenBoolean<(AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2]["selections"] extends {} ? (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2]["selections"][number]["id"] : (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2]["parser"] extends {} ? ReturnType<(AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2]["parser"]> : (AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>> extends infer T_2 ? { [K_1 in keyof T_2]: AddMissingProps<T[keyof T]["fields"], AllKeys<T[keyof T]["fields"]>>[K_1]; } : never)[K_2]["defaultValue"]>; } : never;
    parsers: Parsers;
};

declare function outputUI(model: Model): Promise<void>;

declare const colorToRgba: (value: Serializable | undefined) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare const colorToRgbaString: (value: Serializable | undefined) => string;

declare const identity: (id: string) => string;
declare const camel2title: (camelCase: string) => string;
declare const parserWarning: (value: Serializable | undefined, targetType: string) => void;
declare function keys<T extends object>(obj: T): (keyof T)[];
declare function entries<T extends object>(obj: T): {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
declare function fromEntries<K extends PropertyKey, T = any>(entries: Iterable<readonly [K, T]>): {
    [k in K]: T;
};
declare function mapValues<T extends object, R>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => R): { [k in keyof T]: R; };
declare function mapEntries<T extends object, R extends [PropertyKey, unknown]>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => R): {
    [x: string]: unknown;
    [x: number]: unknown;
    [x: symbol]: unknown;
};
declare const prefixKeys: <T extends Record<string, UIFieldsInput>, KP extends string>(field: T, keyPrefix: KP) => { [K in keyof T as `${KP extends infer Pre ? Pre : never}${K extends string ? K : never}`]: T[K]; };

declare function prependConsoleLog(prefix: string): (...args: unknown[]) => void;

declare function round(value: number, dp?: number): number;
declare function clamp(value: number, min: number, max: number): number;

/**
 * A deterministic pseudo-random number generator.
 * Pass in the same seed and get the same pseudorandom number.
 * See: https://remotion.dev/docs/random
 */
declare const random: (seed: number | string | null, dummy?: unknown) => number;
declare function shuffleArrayInPlace(array: unknown[]): void;

declare function sleep(ms: number): Promise<unknown>;

export { AddMissingProps, Alignment, AllKeys, ButtonHandlers, DistributiveOmit, EasingHandles, EasingKeys, Expand, ExpandRecursively, FieldInput, GridData, Hex, Milliseconds, Model, Motorsport, MotorsportBestLap, MotorsportDriver, MotorsportLive, MotorsportLiveResults, MotorsportMarker, MotorsportRaceLap, MotorsportRecord, MotorsportRow, MotorsportTime, Optionals, Parser, Parsers, Seconds, Serializable, SetOptional, SingularAnimation, SingularWidgetArgs, Tinycolor, UIField, UIFieldInput, UIFields, UIFieldsInput, UIGroup, UIGroupInput, UnionToIntersection, UnitInterval, WidenBoolean, WidenFieldValue, camel2title, clamp, colorToRgba, colorToRgbaString, defineUI, eases, easingKeys, entries, fromEntries, hexToRGBA, identity, initGui, interpolate, keys, lerp, loop, mapEntries, mapValues, outputUI, parserWarning, prefixKeys, prependConsoleLog, random, round, shuffleArrayInPlace, sleep, tw, ui };
