import { Pipe, PipeTransform } from '@angular/core';
import * as string from '../utils/string';

@Pipe({
  name: 'markup'
})
export class MarkupPipe implements PipeTransform {

  transform(value: string): string {
    return string.renderMarkdown(value);
  }
}
