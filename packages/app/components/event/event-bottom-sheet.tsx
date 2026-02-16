import React, { useMemo, useRef } from "react";
import BottomSheet, { BottomSheetFooter } from "@gorhom/bottom-sheet";
import { EventContent } from "./event-content";
import { StickyFooter } from "./sticky-footer";
import type { EventDetail } from "../../types";
import { StyleSheet, View } from "react-native";


interface EventBottomSheetProps {
    event: EventDetail;
}

const DARK = {
    bg: "#111827",
    indicator: "#4b5563",
};

export const EventBottomSheet: React.FC<EventBottomSheetProps> = ({ event }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ["40%", "90%"], []);

    const renderFooter = React.useCallback(
        (props: any) => (
            <BottomSheetFooter {...props} bottomInset={0}>
                <View style={{ backgroundColor: DARK.bg }}>
                    <StickyFooter
                        price={event.price}
                        onBookPress={() => console.log("Book Pressed")}
                    />
                </View>
            </BottomSheetFooter>
        ),
        [event.price]
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: DARK.indicator, width: 40 }}
            backgroundStyle={{ backgroundColor: DARK.bg }}
            footerComponent={renderFooter}
        >
            <EventContent event={event} />
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: DARK.bg,
    },
});
