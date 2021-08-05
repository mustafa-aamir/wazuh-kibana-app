/*
 * Wazuh app - React View OfficeBody.
 *
 * Copyright (C) 2015-2021 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React from 'react';
import { VisConfigLayout } from '../../../common/modules/panel';

interface IOfficeBody {
  changeView(field: string): void;
  toggleFilter(field: string, value: string): void;
  rows: [];
}

export const OfficeBody = ({ changeView, toggleFilter, rows = [] }: IOfficeBody) => {
  const rowClickHandler = (field: string, value: string) => {
    toggleFilter(field, value);

    changeView(field);
  };

  return <VisConfigLayout rows={rows} rowClickHandler={rowClickHandler} />;
};
