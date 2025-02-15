import React, { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { getWithFontScale } from '../../../../utils/getWithFontScale';
import { useMemo } from 'react';

const PLACEHOLDER_VALUE = '0';

export type PasscodeCellState = 'empty' | 'hidden' | 'visible';

interface PasscodeCellProps {
  state: PasscodeCellState;
  value: string;
  error?: boolean;
  testID?: string;
}

const VisibleCell = ({ value }: any) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Text maxFontSizeMultiplier={2} style={styles.cellText}>
      {value}
    </Text>
  );
};

const HiddenCell = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <View style={styles.cellHiddenIconContainer}>
        <View style={styles.cellHiddenIcon} />
      </View>
      <Text style={[styles.cellText, styles.cellTextHidden]}>
        {PLACEHOLDER_VALUE}
      </Text>
    </>
  );
};
const EmptyCell = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <Text style={[styles.cellText, styles.cellTextHidden]}>
      {PLACEHOLDER_VALUE}
    </Text>
  );
};
export const  PasscodeCell = ({
  state,
  value,
  error,
  testID,
}: PasscodeCellProps) => {
  const { styles } = useStyles(stylesheet);

  const cellElement = useMemo(() => {
    console.log('state', state);
    switch (state) {
      case 'visible': {
        return <VisibleCell value={value} />;
      }
      case 'hidden': {
        return <HiddenCell />;
      }
      case 'empty':
      default: {
        return <EmptyCell />;
      }
    }
  }, [value, state]);

  return (
    <View style={styles.cellContainer}>
      <View
        style={[styles.cell, styles.withCellStyle(error)]}
      >
        <View style={styles.cellElement}>{cellElement}</View>
      </View>
    </View>
  );
};

const PASSCODE_ICON_SIZE = 8;
const PASSCODE_ICON_HALF_SIZE = PASSCODE_ICON_SIZE / 2;
const stylesheet = createStyleSheet((theme) => ({
  cellText: {
    width: '100%',
    flex: 1,
    color: 'red',
    fontSize: 28,
    textAlign: 'center',
  },
  cellContainer: {
    flex: 1,
    minWidth: 28,
    minHeight: getWithFontScale(64),
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 5
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingBottom: 16,
    // borderBottomWidth: 2,
  },
  cellElement: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  cellHiddenIconContainer: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateY: getWithFontScale(PASSCODE_ICON_HALF_SIZE),
      },
    ],
  },
  cellTextHidden: {
    opacity: 0,
    color: 'red',
  },
  cellHiddenIcon: {
    position: 'absolute',
    left: '50%',
    right: 0,
    top: 0,
    bottom: 0,
    width: getWithFontScale(PASSCODE_ICON_SIZE),
    height: getWithFontScale(PASSCODE_ICON_SIZE),
    borderRadius: getWithFontScale(PASSCODE_ICON_SIZE),
    alignSelf: 'center',
    transform: [
      {
        translateX: -getWithFontScale(PASSCODE_ICON_HALF_SIZE),
      },
      {
        translateY: -getWithFontScale(PASSCODE_ICON_HALF_SIZE),
      },
    ],

    variants: {
      surface: {
        default: {
          backgroundColor: 'red',
        },
        onSurfaceLight: {
          backgroundColor: 'red',
        },
        onSurfaceDark: {
          backgroundColor: 'red',
        },
      },
    },
  },
  withCellStyle: (error?: boolean) => {
    return {
      borderBottomColor: 'red',
    };
  },
}));
