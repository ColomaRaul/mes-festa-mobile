import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { SubmenuSkeleton } from '../../components/SubmenuSkeleton'
import { StackScreenProps } from '@react-navigation/stack';
import { OrganizationStackParams } from '../../router/OrganizationRouter';
import { OrganizationContext } from '../../context/OrganizationContext';

interface Props extends StackScreenProps<OrganizationStackParams, 'TransactionsScreen'>{};

export const TransactionScreen = ({ route }: Props) => {
  const { organization } = useContext(OrganizationContext);

  return (
    <SubmenuSkeleton>
      <View>
        <Text>Compters: {organization?.id}</Text>
      </View>
    </SubmenuSkeleton>
  )
}
