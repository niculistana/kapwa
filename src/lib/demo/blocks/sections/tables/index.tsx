import React from 'react';
import { Table, TableDataItem } from '@kapwa/table';
import { Card, CardContent } from '@kapwa/card';

type TablesSectionProps = {
  title: string;
  subtitle?: string;
  tableData: TableDataItem[];
};

const TablesSection: React.FC<TablesSectionProps> = ({
  title,
  subtitle,
  tableData,
}: TablesSectionProps) => {
  return (
    <Card className='mb-2'>
      <CardContent>
        <Table title={title} subtitle={subtitle || ''} tableData={tableData} />
      </CardContent>
    </Card>
  );
};

export { TablesSection };
export type { TableDataItem, TablesSectionProps };
