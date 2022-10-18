export declare const easingKeys: ("linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine")[];
export declare type EasingKeys = typeof easingKeys[number];
export declare type EasingHandles = [number, number, number, number];
export declare const eases: {
    handles: Record<"linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine", EasingHandles>;
    css: Record<"linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine", string>;
    selections: {
        id: "linear" | "inOutCirc" | "inCirc" | "outCirc" | "inOutQuart" | "inQuart" | "outQuart" | "inOutCubic" | "inCubic" | "outCubic" | "inOutQuad" | "inQuad" | "outQuad" | "inOutQuint" | "inQuint" | "outQuint" | "inOutBack" | "inBack" | "outBack" | "inOutQS" | "inOutQS2" | "inOutQS3" | "inOutExpo" | "inExpo" | "outExpo" | "inOutSine" | "inSine" | "outSine";
        title: "Linear" | "Circ InOut" | "Circ In" | "Circ Out" | "Power4 InOut" | "Power4 In" | "Power4 Out" | "Power3 InOut" | "Power3 In" | "Power3 Out" | "Power2 InOut" | "Power2 In" | "Power2 Out" | "Power5 InOut" | "Power5 In" | "Power5 Out" | "Spring InOut" | "Spring In" | "Spring Out" | "Quick Spring" | "Quick Spring2" | "Quick Spring3" | "Expo InOut" | "Expo In" | "Expo Out" | "Sine InOut" | "Sine In" | "Sine Out";
    }[];
};
